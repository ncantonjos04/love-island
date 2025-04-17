const {createClient} = require('@supabase/supabase-js');
const dotenv = require('dotenv');
dotenv.config();

const supabase = createClient(process.env.SUPABASE_DOMAIN, process.env.SUPABASE_KEY);


async function getAllContestants(){
    const {data,error} = await supabase.from('Contestants').select('*');
    if (error){
        console.log(error);
        return [];
    }
    else{
        return data;
    }
       
}

async function insertContestant(name, age, last_name){

    const {error} = await supabase.from('Contestants').insert({
        Name: name,
        Age:age,
        last_name: last_name
    })
    if(error)
        console.log(error);
    }


    module.exports = {getAllContestants, insertContestant}
