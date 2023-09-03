import React from 'react';

async function productList() {
  let data = await fetch('https://dummyjson.com/products');
  data = await data.json();
  return data.products;
}

const Product = async () => {
  let products = await productList();
  console.log(products);
  return (
    <>
      <div style={{}}>
        <div>
          <h1 style={{ textAlign: 'center', padding: '10px 0px' }}>
            Products List
          </h1>
        </div>

        <section>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {products.map((item, index) => (
              <div
                key={index}
                style={{
                  margin: '10px',
                  width: '420px',
                  boxShadow: '0px 0px 8px',
                }}
              >
                <div
                  style={{
                    padding: '15px',
                  }}
                >
                  <div>
                    <h3
                      style={{
                        textAlign: 'center',
                        fontWeight: '600',
                        fontSize: '20px',
                        textTransform: 'capitalize',
                        fontFamily: 'cursive',
                      }}
                    >
                      {item.category}
                    </h3>

                    <div>
                      <h2
                        style={{
                          textAlign: 'center',
                          fontWeight: '600',
                          fontSize: '15px',
                          textTransform: 'capitalize',
                          fontFamily: 'sans-serif',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        {item.brand}
                      </h2>
                    </div>
                  </div>
                  <div
                    style={{
                      width: '390px',
                      height: '220px',
                    }}
                  >
                    <img
                      src={item.thumbnail}
                      alt="img"
                      style={{ width: '100%', height: '100%' }}
                    />
                  </div>
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <h2
                      style={{
                        textAlign: 'center',
                        fontWeight: '600',
                        fontSize: '16px',
                        textTransform: 'capitalize',
                        fontFamily: 'sans-serif',
                        display: 'flex',
                        alignItems: 'center',
                        height: '30px',
                      }}
                    >
                      {item.title}
                    </h2>
                    <h2
                      style={{
                        textAlign: 'center',
                        fontWeight: '600',
                        fontSize: '16px',
                        textTransform: 'capitalize',
                        fontFamily: 'sans-serif',
                        display: 'flex',
                        alignItems: 'center',
                        height: '30px',
                      }}
                    >
                      Price:${item.price}
                    </h2>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      style={{
                        textAlign: 'center',
                        fontWeight: '600',
                        fontSize: '16px',
                        textTransform: 'capitalize',
                        fontFamily: 'sans-serif',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      Rating:
                      <span style={{ color: 'blue' }}>{item.rating}</span>{' '}
                    </div>
                    <h2
                      style={{
                        textAlign: 'center',
                        fontWeight: '600',
                        fontSize: '16px',
                        textTransform: 'capitalize',
                        fontFamily: 'sans-serif',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      In Stock: {item.stock}
                    </h2>
                  </div>
                  <p
                    style={{
                      height: '100px',
                      fontSize: '16px',
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Product;
