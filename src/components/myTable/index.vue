<template>
    <el-table
        v-loading="tableData.loading"
        :data="tableData.data"
        :stripe="stripe"
        :border="border"
        :highlight-current-row="highlightCurrentRow"
        :empty-text="emptyText"
        style="width: 100%"
        height="100%"
        :size="size"
        @selection-change="handleSelectionChange"
    >
        <template v-if="props.data" #empty>
            <el-empty description="暂无数据"></el-empty>
        </template>
        <el-table-column
            v-if="checkBox"
            type="selection"
            width="50"
            :fixed="fixedCheck"
            :align="align"
        ></el-table-column>
        <el-table-column
            v-if="index"
            type="index"
            width="60"
            :fixed="fixedIndex"
            :align="align"
        ></el-table-column>

        <template v-for="(item, itemIndex) in column" :key="itemIndex">
            <el-table-column
                v-if="item.type === 'slot'"
                :label="item.label"
                :prop="item.prop"
                :width="item.width"
                :fixed="item.fixed"
                :sortable="item.sortable"
                :align="align"
                :show-overflow-tooltip="item.showOverflowTooltip"
            >
                <template #default="scope">
                    <slot :name="item.slot_name" :data="scope.row"></slot>
                </template>
            </el-table-column>
            <el-table-column
                v-else
                :label="item.label"
                :prop="item.prop"
                :width="item.width"
                :fixed="item.fixed"
                :sortable="item.sort"
                :align="align"
                :show-overflow-tooltip="item.showOverflowTooltip"
            ></el-table-column>
        </template>
    </el-table>
</template>

<script lang="ts" setup>
    import * as api from '@/api/system/tableApi'

    const props = defineProps({
        column: {
            type: Object,
            required: true,
            default: () => {}
        },
        data: {
            type: Array,
            default: () => []
        },
        stripe: {
            type: Boolean,
            default: true
        },
        border: {
            type: Boolean,
            default: true
        },
        highlightCurrentRow: {
            type: Boolean,
            default: true
        },
        size: {
            type: String,
            default: 'default'
        },
        align: {
            type: String,
            default: 'center'
        },
        fixedIndex: {
            type: Boolean,
            default: false
        },
        fixedCheck: {
            type: Boolean,
            default: false
        },
        emptyText: {
            type: String,
            default: '暂无数据！'
        },
        checkBox: Boolean,
        index: Boolean,
        api: {
            type: String,
            default: ''
        },
        params: {
            type: Object,
            default: () => {}
        },
        initRequest: {
            type: Boolean,
            default: false
        },
        onLoad: {
            type: Boolean,
            default: false
        },
        format: {
            type: Function,
            default: (val) => {
                return val
            }
        }
    })
    const emit = defineEmits(['onLoad'])
    const tableData:any = reactive({
        total: 0,
        loading: false,
        data: []
    })

    watch(
        () => props.data,
        (val) => {
            tableData.data = val
        }
    )
    onMounted(() => {
        if (props.initRequest) {
            getTableList()
        }
    })
    const getTableList = async () => {
        tableData.loading = true
        const res = await api[props.api]({
            ...props.params
        })
        console.log(res)
        if (res.data && res.data.total && res.data.list) {
            if (props.format && typeof props.format === 'function') {
                tableData.data = props.format(res.data.list)
            } else {
                tableData.data = res.data.list
            }
            tableData.total = res.data.total
            tableData.loading = false
            if (props.onLoad) {
                emit('onLoad', tableData.data)
            }
        } else {
            ElMessage.warning('暂无数据！')
        }
    }

    const handleSelectionChange = (val) => {
        console.log(val)
    }

    defineExpose({
        getTableList
    })
</script>

<style scoped lang="scss"></style>
