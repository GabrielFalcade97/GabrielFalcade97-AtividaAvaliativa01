const Utils = require('./util');
const util = new Utils();


const Lista_faturas = [
    {
        codigo: 1,
        valor: 859.00,
        data: '10/21/2021',
        cliente: {
            nome: 'Carlos Alberto',
            dataInclusao: '08/21/2019',
            estado: 'MA'
        }
    },
    {
        codigo: 2,
        valor: 156.55,
        data: '11/19/2021',
        cliente: {
            nome: 'João Carlos',
            dataInclusao: '03/18/2014',
            estado: 'AM'
        }
    },
    {
        codigo: 3,
        valor: 2269.56,
        data: '04/04/2020',
        cliente: {
            nome: 'Rafaela Oliveira',
            dataInclusao: '09/17/2019',
            estado: 'SC'
        }
    },
    {
        codigo: 4,
        valor: 2299.55,
        data: '10/04/2021',
        cliente: {
            nome: 'Valdemir Aparecido',
            dataInclusao: '05/10/2019',
            estado: 'SP'
        }
    },
    {
        codigo: 5,
        valor: 2489.90,
        data: '11/03/2021',
        cliente: {
            nome: 'Paulo Roberto',
            dataInclusao: '02/01/2018',
            estado: 'DF'
        }
    },
    {
        codigo: 6,
        valor: 2766.40,
        data: '11/03/2021',
        cliente: {
            nome: 'Renato Miguel',
            dataInclusao: '09/29/2021',
            estado: 'PR'
        }
    },
    {
        codigo: 7,
        valor: 2998.99,
        data: '11/03/2021',
        cliente: {
            nome: 'Renata Oliveira',
            dataInclusao: '09/28/2021',
            estado: 'RJ'
        }
    },
    {
        codigo: 8,
        valor: 7100.50,
        data: '11/03/2021',
        cliente: {
            nome: 'Renato Miguel',
            dataInclusao: '03/28/2019',
            estado: 'GO'
        }
    },
    {
        codigo: 9,
        valor: 4050.00,
        data: '11/03/2021',
        cliente: {
            nome: 'Matheus Oliveira',
            dataInclusao: '03/28/2019',
            estado: 'PR'
        }
    },
    {
        codigo: 10,
        valor: 5023.00,
        data: '11/03/2021',
        cliente: {
            nome: 'João Luiz',
            dataInclusao: '03/28/2019',
            estado: 'SP'
        }
    }
];

module.exports = Lista_faturas;