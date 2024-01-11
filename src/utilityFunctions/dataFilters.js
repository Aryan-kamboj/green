import {data} from "../assets/data";

const suppliers = Object.keys(data);
export const E_R_by_month = function (){
        const emissionRevenueByMonth2023 = {
            Jan:{e:0,r:0,ratio:0,yoy:0},
            Feb:{e:0,r:0,ratio:0,yoy:0},
            Mar:{e:0,r:0,ratio:0,yoy:0},
            Apr:{e:0,r:0,ratio:0,yoy:0},
            May:{e:0,r:0,ratio:0,yoy:0},
            Jun:{e:0,r:0,ratio:0,yoy:0},
            Jul:{e:0,r:0,ratio:0,yoy:0},
            Aug:{e:0,r:0,ratio:0,yoy:0},
            Sep:{e:0,r:0,ratio:0,yoy:0},
            Oct:{e:0,r:0,ratio:0,yoy:0},
            Nov:{e:0,r:0,ratio:0,yoy:0},
            Dec:{e:0,r:0,ratio:0,yoy:0}
        };
for(const Supplier of suppliers){
    if(data[`${Supplier}`][2023])
    for(const item of data[`${Supplier}`][2023]){
        emissionRevenueByMonth2023[item.Month].e=emissionRevenueByMonth2023[item.Month].e+item.Emissions;
        emissionRevenueByMonth2023[item.Month].r=emissionRevenueByMonth2023[item.Month].r+item.Revenue;
        emissionRevenueByMonth2023[item.Month].ratio = item['R/E'];
        emissionRevenueByMonth2023[item.Month].yoy = item['YOY R/E Change'];
    }
}
    const emissionRevenueByMonth2022 = {
        Jan:{e:0,r:0,ratio:0},
        Feb:{e:0,r:0,ratio:0},
        Mar:{e:0,r:0,ratio:0},
        Apr:{e:0,r:0,ratio:0},
        May:{e:0,r:0,ratio:0},
        Jun:{e:0,r:0,ratio:0},
        Jul:{e:0,r:0,ratio:0},
        Aug:{e:0,r:0,ratio:0},
        Sep:{e:0,r:0,ratio:0},
        Oct:{e:0,r:0,ratio:0},
        Nov:{e:0,r:0,ratio:0},
        Dec:{e:0,r:0,ratio:0}
    };
    for(const Supplier of suppliers){
        if(data[`${Supplier}`][2022])
        for(const item of data[`${Supplier}`][2022]){
            emissionRevenueByMonth2022[item.Month].e=emissionRevenueByMonth2022[item.Month].e+item.Emissions;
            emissionRevenueByMonth2022[item.Month].r=emissionRevenueByMonth2022[item.Month].r+item.Revenue;
            emissionRevenueByMonth2022[item.Month].ratio = item['R/E'];
        }
    }

    return {2022:emissionRevenueByMonth2022,2023:emissionRevenueByMonth2023};
}
export const totalEmm = function (){
    const totalEmmission ={};
    suppliers.map((Supplier)=>{
        let sum22 = 0;
        if(data[`${Supplier}`][2022]){
            sum22 = data[`${Supplier}`][2022].reduce((agg,current)=>{
                return (current.Emissions + agg);
            },0)
        }
        let sum23 = 0;
        if(data[`${Supplier}`][2023]){
            sum23 = data[`${Supplier}`][2023].reduce((agg,current)=>{
                return (current.Emissions + agg);
            },0)}
            const total = sum22+sum23;
            totalEmmission[Supplier]=total
            return 0;
        })
        return totalEmmission;
}