module.exports.getData = async (data,res) => {
    const data_ref = [{
        ref_id:"1234567891234",
        first_name:"Tu",
        last_name:"Ocha kuy"
        },{
        ref_id:"1111111111111",
        first_name:"Spay",
        last_name:"Zing"
        },{
        ref_id:"6969696969696",
        first_name:"O",
        last_name:"teepungkorn"
        }
    ]
    let dat_result 
    for (let index = 0; index < data_ref.length; index++) {

        if(data_ref[index].ref_id === data){
            dat_result =  result = {
                ref_id:data_ref[index].ref_id,
                first_name:data_ref[index].first_name,
                last_name:data_ref[index].last_name,
            }
            break; 
        }
        
    }
    if(dat_result){
        return dat_result
    }else{
        return {message:null}
    }
    

}