<template>
    <div class="container">
        <error-tip/>
        <div v-if="!errorCode">
            <card-list :data="yearData"/>
        </div>
    </div>
</template>

<script>
    import getData from '@/services';
    import { onMounted, computed, watch } from 'vue';
    import {useStore} from 'vuex'

    import ErrorTip from "../components/ErrorTip";
    import CardList from "../components/YearPage/List";
    import {getNowDate} from "../libs/utils";
    export default {
        name: "YearPage",
        components: {
            CardList,
            ErrorTip
        },
        setup() {
            const store = useStore(),
                  state = store.state;

            onMounted(() =>{
                getData(store, 'year',getNowDate('year'));
            });
            watch(()=>{
                return state.yearData;
            },()=>{
                store.commit('setErrorCode',0);
            });
            return{
                yearData:computed(()=>state.yearData),
                errorCode:computed(() => state.errorCode)
            }
        }
    }
</script>

<style lang="sass" scoped>

</style>
