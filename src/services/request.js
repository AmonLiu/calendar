import { axiosPost } from '@/libs/http';

function getDayData(date) {
    return new Promise((resolve, reject) =>{
        axiosPost({
            url:"/api/calendar/day",
            data:{date},
            success(data) {
                resolve(data);
            },
            error(err) {
                reject(err);
            }
        })
    })
}


function getMonthData(yearmonth) {
    return new Promise((resolve, reject) =>{
        axiosPost({
            url:"/api/calendar/month",
            data:{
                "year-month": yearmonth,
            },
            success(data) {
                resolve(data);
            },
            error(err) {
                reject(err);
            }
        })
    })
}

function getYearDate(year) {
    return new Promise((resolve, reject) =>{
        axiosPost({
            url:"/api/calendar/year",
            data:{year},
            success(data) {
                resolve(data);
            },
            error(err) {
                reject(err);
            }
        })
    })
}

export{
    getDayData,
    getMonthData,
    getYearDate
}