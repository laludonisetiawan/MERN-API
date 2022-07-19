// function untuk createproduct nantinya akan di panggil yang di buat dari controller 
exports.createProduct = (req, res, next) => {
    //mengirimkan response data ketika client mengunjungi endpoint products
    res.json({
        message: 'create Product success',
        data: {
            name: 'monitor',
            description: 'new bnb 100% original',
            price: 9000000,
        }
    });

    // agar proses eksekusi endpointnya berjalan ke endpoint selanjutkan tambahkan parameter next();
    next();
}

// mengexport crateProduct agar bisa digunakan darimana saja, caranya dengan memanggilnya di dalam controller



exports.getAllProducts =  (req, res, next) => {
    //mengirimkan response data ketika client mengunjungi endpoint products
    res.json({
        message: 'get All Products success!',
        data: [
            {
                name: 'monitor',
                description: 'new bnb 100% original',
                price: 9000000, 
            }
        ]
    });

    // agar proses eksekusi endpointnya berjalan ke endpoint selanjutkan tambahkan parameter next();
    next();
 }