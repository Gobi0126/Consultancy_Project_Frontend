import React from 'react';

const containerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  minHeight: '100vh',
};

const contentStyles = {
  backgroundColor: '#e8f5e8', // Change the background color
  padding: '20px',
  border: '1px solid #bcd9bc', // Change the border color
  borderRadius: '10px',
  boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
  width: '90%',
  textAlign: 'center',
};

const headingStyles = {
  fontSize: '24px',
  marginBottom: '20px',
  color: '#377c37',
};

const paragraphStyles = {
  fontSize: '18px',
  lineHeight: '1.6',
  marginBottom: '20px',
  color: '#333', // Change the text color
};

const imageStyles = {
  maxWidth: '600px',
};
const imageGalleryStyles = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  marginBottom: '20px',
};

const galleryImageStyles = {
  flex: '0 0 calc(33.33% - 10px)',
  maxWidth: '300px',
  marginBottom: '10px',
  marginRight: '10px',
  boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
};

const loveNatureStyles = {
  fontSize: '24px',
  color: '#377c37',
  marginTop: '20px',
  marginBottom: '10px',
};

function AboutUs() {
  return (
    <div style={containerStyles}>
      <div style={contentStyles}>
        <h2 style={headingStyles}>About Our T-shirt E-commerce</h2>
        <p style={paragraphStyles}>
        Welcome to our T-shirt E-commerce hub, where style meets convenience! Explore our curated collection of premium tees designed to elevate your wardrobe. From timeless classics to trendy essentials, we offer a diverse range of styles, colors, and sizes to suit every taste and occasion. With seamless navigation and secure checkout, shopping with us is a breeze. Join our community of fashion enthusiasts and discover the perfect tee for every moment. Start shopping now and redefine your style with ease and confidence!
        </p>
        {/* <p style={paragraphStyles}>
          We provide a wide range of plant species, gardening supplies, and expert advice to ensure your success in plant cultivation. Whether you're a seasoned gardener or a beginner, our platform is here to guide you every step of the way.
        </p> */}
        <h3 style={headingStyles}>Models for Mens</h3>
        <p style={paragraphStyles}>
        Introducing our men's collection: where sophistication meets comfort. Dive into a world of timeless elegance and modern flair with our curated range of versatile pieces. From sleek, tailored shirts to laid-back graphic tees, each garment is meticulously crafted with premium fabrics and attention to detail. Whether you're aiming for a polished office look or a relaxed weekend ensemble, our diverse selection has you covered. Embrace effortless style and exceptional quality with our men's collection today. Redefine your wardrobe with pieces that exude confidence and charm.
        </p>
        {/* <ul style={paragraphStyles}>
          <li>Choose the right plant for your space and climate.</li>
          <li>Provide adequate sunlight and water based on plant requirements.</li>
          <li>Use high-quality soil and suitable containers if you're potting plants.</li>
          <li>Regularly prune and fertilize your plants for optimal growth.</li>
        </ul> */}
        <h3 style={headingStyles}>Models for Womens</h3>
        <p style={paragraphStyles}>
        Step into a realm of feminine elegance and empowerment with our women's collection. Discover a fusion of contemporary trends and timeless classics, curated to elevate your style effortlessly. From chic blouses to casual tees, each piece is thoughtfully designed with luxurious fabrics and flattering silhouettes to accentuate your individuality. Whether you're conquering the boardroom or embracing a leisurely weekend, our diverse range offers something for every occasion. Embrace your unique sense of style and confidence with our women's collection. Redefine fashion on your terms and make a statement wherever you go.
        </p>
        {/* <ul style={paragraphStyles}>
          <li>Maintain good sanitation practices in your garden or indoor space.</li>
          <li>Regularly inspect your plants for signs of disease or pests.</li>
          <li>Isolate infected plants to prevent the spread of diseases.</li>
          <li>Use organic or chemical treatments as needed, following recommended guidelines.</li>
        </ul> */}
      </div>
      {/* <div style={loveNatureStyles}>Our Love towards Nature</div>
      <div style={imageGalleryStyles}>
        <img
          src="https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHNoaXJ0fGVufDB8fDB8fHww"
          alt="Image 1"
          style={galleryImageStyles}
        />
        <img
          src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHNoaXJ0fGVufDB8fDB8fHww"
          alt="Image 2"
          style={galleryImageStyles}
        />
        <img
          src="https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHNoaXJ0fGVufDB8fDB8fHww"
          alt="Image 3"
          style={galleryImageStyles}
        />
      
      </div> */}
    </div>
  );
}

export default AboutUs;