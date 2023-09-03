'use client';
const ProductButton = ({ price }) => {
  return (
    <>
      <button
        style={{
          backgroundColor: 'blue',
          padding: '10px 20px',
          borderRadius: '20px',
          width: '50%',
          marginLeft: '100px',
          marginBottom: '20px',
          border: 'none',
          fontSize: '20px',
          color: 'white',
          outline: 'none',
        }}
        onClick={() => alert(`Price is: $${price}`)}
      >
        Check price
      </button>
    </>
  );
};

export default ProductButton;
