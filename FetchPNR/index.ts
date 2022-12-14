import { AzureFunction, Context } from "@azure/functions"

export const timerTrigger: AzureFunction = async function (context: Context, myTimer: any): Promise<void> {
    var timeStamp = new Date().toISOString();
    
    if (myTimer.isPastDue)
    {
        context.log('Timer function is running late! jj');
    }
    context.log('Timer trigger function ran! jj', timeStamp);   
};
export const  myTimer = timerTrigger

export default timerTrigger;
