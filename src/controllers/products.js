// function untuk createproduct nantinya akan di panggil yang di buat dari controller 
exports.createProduct = (req, res, next) => {
    //mengirimkan response data ketika client mengunjungi endpoint products
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    res.json({
        message: 'create Product success',
        data: {
            name: name,
            description: description,
            price: price,
        }
    });

    // agar proses eksekusi endpointnya berjalan ke endpoint selanjutkan tambahkan parameter next();
    next();
}

// mengexport crateProduct agar bisa digunakan darimana saja, caranya dengan memanggilnya di dalam controller



exports.getAllProducts = (req, res, next) => {
    const name = res.body.name;
    const description = res.body.description;
    const price = res.body.price;
    //mengirimkan response data ketika client mengunjungi endpoint products
    res.json({
        message: 'get All Products success!',
        data: [
            {
                name: name,
                description: description,
                price: price,
            }
        ]
    });

    // agar proses eksekusi endpointnya berjalan ke endpoint selanjutkan tambahkan parameter next();
    next();
}