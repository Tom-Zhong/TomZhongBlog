<template>
  <b-container fluid>
    <!-- User Interface controls -->
    <b-row>
      <b-col lg="6" class="my-1">
        <b-form-group
          label="排序类型"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          label-for="sortBySelect"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-select v-model="sortBy" id="sortBySelect" :options="sortOptions" class="w-75">
              <template v-slot:first>
                <option value>-- none --</option>
              </template>
            </b-form-select>
            <b-form-select v-model="sortDesc" size="sm" :disabled="!sortBy" class="w-25">
              <option :value="false">Asc</option>
              <option :value="true">Desc</option>
            </b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col>

      <!-- <b-col lg="6" class="my-1">
        <b-form-group
          label="Initial sort"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          label-for="initialSortSelect"
          class="mb-0"
        >
          <b-form-select
            v-model="sortDirection"
            id="initialSortSelect"
            size="sm"
            :options="['asc', 'desc', 'last']"
          ></b-form-select>
        </b-form-group>
      </b-col>-->

      <!-- 按名称搜索文章 -->
      <b-col lg="6" class="my-1">
        <b-form-group
          label="标题搜索"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          label-for="filterInput"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              v-model="title"
              type="search"
              id="filterInput"
              placeholder="输入文章标题进行搜索"
              debounce="500"
              @update="updateResult"
            ></b-form-input>
            <b-input-group-append>
              <b-button :disabled="!title" @click="title = '' && updateResult()">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>

      <!-- <b-col lg="6" class="my-1">
        <b-form-group
          label="Filter On"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          description="Leave all unchecked to filter on all data"
          class="mb-0"
        >
          <b-form-checkbox-group v-model="filterOn" class="mt-1">
            <b-form-checkbox value="name">Name</b-form-checkbox>
            <b-form-checkbox value="age">Age</b-form-checkbox>
            <b-form-checkbox value="isActive">Active</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
      </b-col>-->

      <b-col sm="5" md="6" class="my-1">
        <b-form-group
          label="每页展示个数"
          label-cols-sm="6"
          label-cols-md="4"
          label-cols-lg="3"
          label-align-sm="right"
          label-size="sm"
          label-for="perPageSelect"
          class="mb-0"
        >
          <b-form-select
            v-model="perPage"
            id="perPageSelect"
            size="sm"
            :options="pageOptions"
            @change="changePageLimit"
          ></b-form-select>
        </b-form-group>
      </b-col>

      <b-col sm="7" md="6" class="my-1">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="my-0"
          @change="this.changePage"
        ></b-pagination>
      </b-col>
    </b-row>

    <!-- Main table element -->
    <b-table
      show-empty
      small
      stacked="md"
      :items="items"
      :fields="fields"
      :busy.sync="isBusy"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      @filtered="onFiltered"
    >
      <template v-slot:cell(actions)="row">
        <!-- <b-button
          size="sm"
          @click="info(row.item, row.index, $event.target)"
          class="mr-1"
        >Info modal</b-button>
        <b-button
          size="sm"
          @click="row.toggleDetails"
        >{{ row.detailsShowing ? 'Hide' : 'Show' }} Details</b-button>
        <b-form-checkbox
          class="checkbox-1"
          @change="toggleArticleOpenStatus(row.item)"
          value="true"
          :key="row.item._id"
          unchecked-value="false"
        >是否发布</b-form-checkbox> -->
        <b-button size="sm" :href="'/details/' + row.item._id" target="_blank" rel="noopener noreferrer">浏览文章</b-button>
        <b-button size="sm" @click="showDelelteArticleModal(row.item, row.index, $event.target)">删除文章</b-button>
      </template>

      <template v-slot:row-details="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
          </ul>
        </b-card>
      </template>
    </b-table>

    <!-- Info modal -->
    <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
      <pre>{{ infoModal.content }}</pre>
    </b-modal>

    <!-- 删除文章确认框 -->
    <b-modal :id="deleteArticleModal.id" @ok="delelteArticleWhenClickOk">
      <p class="my-4">是否删除文章</p>
      <pre>{{ deleteArticleModal.content }}</pre>
      
    </b-modal>
  </b-container>
</template>

<script>
import queryFormat from '@/utils/queryHandler'
import { deleteArticleById } from '@/utils/getInfo.js'
export default {
  data() {
    return {
      items: [
        // {
        //   isActive: true,
        //   age: 40,
        //   name: { first: 'Dickerson', last: 'Macdonald' }
        // },
        // { isActive: false, age: 21, name: { first: 'Larsen', last: 'Shaw' } },
        // {
        //   isActive: false,
        //   age: 9,
        //   name: { first: 'Mini', last: 'Navarro' },
        //   _rowVariant: 'success'
        // },
        // { isActive: false, age: 89, name: { first: 'Geneva', last: 'Wilson' } },
        // { isActive: true, age: 38, name: { first: 'Jami', last: 'Carney' } },
        // { isActive: false, age: 27, name: { first: 'Essie', last: 'Dunlap' } },
        // { isActive: true, age: 40, name: { first: 'Thor', last: 'Macdonald' } },
        // {
        //   isActive: true,
        //   age: 87,
        //   name: { first: 'Larsen', last: 'Shaw' },
        //   _cellVariants: { age: 'danger', isActive: 'warning' }
        // },
        // { isActive: false, age: 26, name: { first: 'Mitzi', last: 'Navarro' } },
        // {
        //   isActive: false,
        //   age: 22,
        //   name: { first: 'Genevieve', last: 'Wilson' }
        // },
        // { isActive: true, age: 38, name: { first: 'John', last: 'Carney' } },
        // { isActive: false, age: 29, name: { first: 'Dick', last: 'Dunlap' } }
      ],
      // fields: [
      //   {
      //     key: 'name',
      //     label: 'Person Full name',
      //     sortable: true,
      //     sortDirection: 'desc'
      //   },
      //   {
      //     key: 'age',
      //     label: 'Person age',
      //     sortable: true,
      //     class: 'text-center'
      //   },
      //   {
      //     key: 'isActive',
      //     label: 'is Active',
      //     formatter: (value, key, item) => {
      //       return value ? 'Yes' : 'No'
      //     },
      //     sortable: true,
      //     sortByFormatted: true,
      //     filterByFormatted: true
      //   },
      //   { key: 'actions', label: 'Actions' }
      // ],
      fields: [
        {
          key: 'title',
          label: '文章标题',
          sortable: true,
          sortDirection: 'desc'
        },
        {
          key: 'content',
          label: '文章内容',
          sortable: true,
          class: 'text-center'
        },
        {
          key: 'doc.open',
          label: '是否开放阅读',
          formatter: (value, key, item) => {
            return value ? 'Yes' : 'No'
          },
          sortable: true,
          sortByFormatted: true,
          filterByFormatted: true
        },
        { key: 'actions', label: 'Actions' }
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15],
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc',
      title: '',
      filterOn: [],
      infoModal: {
        id: 'info-modal',
        title: '',
        content: ''
      },
      deleteArticleModal: {
        id: 'delete-article-modal',
        title: '',
        content: '',
        article_id: '',
        article_index: '',
      },
      isBusy: false,
    }
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key }
        })
    }
  },
  async mounted() {
    // Set the initial number of items
    // this.totalRows = this.items.length
    await this.getArticleList(this.currentPage)
  },
  methods: {
    info(item, index, button) {
      console.log(item, index, button)
      this.infoModal.title = `Row index: ${index}`
      this.infoModal.content = JSON.stringify(item, null, 2)
      this.$root.$emit('bv::show::modal', this.infoModal.id, button)
    },
    resetInfoModal() {
      this.infoModal.title = ''
      this.infoModal.content = ''
    },
    resetDeleteArticleModal() {
      this.deleteArticleModal.title = ''
      this.deleteArticleModal.content = ''
      this.deleteArticleModal.article_id = ''
      this.deleteArticleModal.article_index = ''
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    changePage(page) {
      console.log(page)
      this.getArticleList(page)
    },
    async getArticleList(index = 1, limit = 5, tit = '', cont = '') {
      const pageIndex = index
      const pageLimit = limit
      const title = tit
      const content = cont
      const query = queryFormat({ pageIndex, pageLimit, title, content })
      const article = window.location.origin + `/v1/article${query}`
      this.isBusy = true
      try {
        const res = await this.$axios.$get(article)
        // console.log(res)
        // console.log(res)
        const {
          pagination: { current, showDataCount, totalDataCount }
        } = res
        const { articles } = res
        console.log(articles)
        this.items = articles
        this.currentPage = current
        this.totalRows = totalDataCount
        this.isBusy = true
      } catch (error) {
        this.isBusy = true
        console.log(error.response)
      }
    },
    toggleArticleOpenStatus(item, index, checkbox) {
      console.log(arguments)
    },
    updateResult(val) {
      // console.log(val)
      this.getArticleList(1, this.perPage, this.title, '')
    },
    changePageLimit(val) {
      // console.log(val)
      this.getArticleList(1, this.perPage, this.title, '')
    },
    
    async showDelelteArticleModal(item, index, button) {
      this.deleteArticleModal.title = `Row index: ${index}`
      this.deleteArticleModal.content = JSON.stringify(item, null, 2)
      this.deleteArticleModal.article_id = item._id || '';
      this.deleteArticleModal.article_index= index;
      this.$root.$emit('bv::show::modal', this.deleteArticleModal.id, button)
    },
    // 删除文章
    async delelteArticleWhenClickOk() {
      const res = await deleteArticleById(this.deleteArticleModal.article_id)
      console.log(res)
      if (res.status === 200) {
        this.$bvToast.toast(`文章删除成功`, {
          title: '文章删除成功',
          autoHideDelay: 3000,
        })
      }
      this.items.splice(this.deleteArticleModal.article_index, 1)
      this.resetDeleteArticleModal()
    }
  }
}
</script>

<style  lang="less" scoped>
</style>