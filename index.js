async function displayData(){
    try{
        const namaCustomer = await getCustomer(1);
        console.log('The customer is : ', namaCustomer);
        if(namaCustomer.isGold){
            const daftarMovie = await getTopMovies(namaCustomer.id);
            console.log(daftarMovie);
            const kirimEmail = await sendEmail(namaCustomer.email);
            console.log('Email Status : ', kirimEmail);
        }
    } catch(err){
        console.log('There\'s ann error : ', err.message);
    }
}

displayData();

function getCustomer(id) {
    return new Promise( (resolve, reject) =>{
        setTimeout(() => {
            resolve({ 
                id: id, 
                name: 'Mosh Hamedani', 
                isGold: true, 
                email: 'email@email.com' 
            });
        }, 4000); 
    }); 
}

function getTopMovies(getUser) {
    return new Promise( (resolve, reject) =>{
        setTimeout(() => {
            console.log('The user with id : ', getUser, ' has top movie list of : ');
            resolve(['movie1', 'movie2']);
        }, 4000);
    }); 
}

function sendEmail(email) {
    return new Promise( (resolve, reject) =>{
        setTimeout(() => {
            resolve({ 
                email: email, 
                hasil: 'Email sent....'
            });
        }, 4000);
    }); 
}