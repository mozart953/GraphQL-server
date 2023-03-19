import moongose from 'moongose'

export async function conect() {
    try {
        await moongose.connect('mongodb://localhost/mongodbgraphql', {
            useNewUrlParser: true
        })

        console.log('base de datos conectada')


    } catch (error) {

        console.log(error);
    }
}

