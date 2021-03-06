<template>
  <div class="container py-5">
    <!-- 1. 使用先前寫好的 AdminNav -->
    <AdminNav />

    <form class="my-4" @submit.stop.prevent="createCategory(newCategoryName)">
      <div class="form-row">
        <div class="col-auto">
          <input
            v-model="newCategoryName"
            type="text"
            class="form-control"
            placeholder="新增餐廳類別..."
          />
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary">
            新增
          </button>
        </div>
      </div>
    </form>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col" width="60">
            #
          </th>
          <th scope="col">
            Category Name
          </th>
          <th scope="col" width="210">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <th scope="row">
            {{ category.id }}
          </th>
          <td class="position-relative">
            <div v-show="!category.isEditing" class="category-name">
              {{ category.name }}
            </div>
            <input
              v-show="category.isEditing"
              v-model="category.name"
              type="text"
              class="form-control"
            />
            <span
              v-show="category.isEditing"
              class="cancel"
              @click="handleCancel(category.id)"
            >
              ✕
            </span>
          </td>
          <td class="d-flex justify-content-between">
            <button
              v-show="!category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="toggleIsEditing(category.id)"
            >
              Edit
            </button>
            <button
              v-show="category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="
                updateCategory({ categoryId: category.id, name: category.name })
              "
            >
              Save
            </button>
            <button
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="deleteCategory(category.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "@/components/AdminNav";
import adminAPI from "../apis/admin";
import { Toast } from "../utils/helpers";

export default {
  components: {
    AdminNav
  },
  // 3. 定義 Vue 中使用的 data 資料
  data() {
    return {
      newCategoryName: "",
      categories: []
    };
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const { data, statusText } = await adminAPI.categories.get();

        if (statusText !== "OK") {
          throw new Error(statusText);
        }

        this.categories = data.categories.map(category => ({
          ...category,
          isEditing: false
        }));
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "無法讀取餐廳類別資料，請稍後再試！"
        });
      }
    },
    async createCategory(newCategoryName) {
      if (!newCategoryName) {
        Toast.fire({
          icon: "warning",
          title: "請填寫餐廳類別名稱"
        });
        return;
      }
      try {
        // 透過api告知伺服器欲新增的餐廳類別
        const { data } = await adminAPI.categories.create({
          name: newCategoryName
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        // 將新的類別添加到陣列中
        this.categories.push({
          id: data.categoryId,
          name: newCategoryName
        });
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "無法新增餐廳類別，請稍後再試！"
        });
      }
    },
    async deleteCategory(categoryId) {
      try {
        // 透過 API 告知伺服器欲刪除的餐廳類別
        const { data, statusText } = await adminAPI.categories.delete(
          categoryId
        );
        if (data.status !== "success") {
          throw new Error(statusText);
        }
        // 將該餐廳類別從陣列中移除
        this.categories = this.categories.filter(
          category => category.id !== categoryId
        );
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "無法刪除餐廳類別，請稍後再試！"
        });
      }
    },
    toggleIsEditing(categoryId) {
      this.categories = this.categories.map(category => {
        if (category.id !== categoryId) return category;
        // 如果迴圈中的 category.id 是欲修改的 categoryId 則改變 isEditing 的值
        return {
          ...category,
          nameCached: category.name,
          isEditing: !category.isEditing
        };
      });
    },
    async updateCategory({ categoryId, name }) {
      // 透過 API 去向伺服器更新餐廳類別名稱
      try {
        const { data } = await adminAPI.categories.update({
          categoryId,
          name
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.toggleIsEditing(categoryId);
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "無法修改餐廳類別，請稍後再試！"
        });
      }
    },
    handleCancel(categoryId) {
      this.categories = this.categories.map(category => {
        if (category.id !== categoryId) return category;
        return {
          ...category,
          name: category.nameCached,
          isEditing: !category.isEditing
        };
      });
    }
  }
};
</script>

<style scoped>
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>
