let data =  [
    { id: 'P1', name: 'Kodak', price: 20000 },
    { id: 'P2', name: 'Canon', price: 26000 },
    { id: 'P3', name: 'Sony', price: 54000 }
];

function search(){
        return  ( data)
    }

function add(nid,nname,nprice){
    data = [...data,{id:nid,name:nname,price:nprice}]
    return data;

}


export let ps={'ProductService':{search,add}}
