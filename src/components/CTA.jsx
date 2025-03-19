import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
        <p
        className='cta-text'
        style={{
          color: 'white', // Texto en blanco
          fontSize: '18px', // Tamaño del texto
          lineHeight: '1.6', // Espaciado entre líneas
        }}
      >
        Have a project you’re passionate about? <br className='sm:block hidden' />
        Let’s team up and make it happen—practical solutions, clear results, and no fluff
      </p>
      <Link
        to='/contact'
        style={{
          backgroundColor: '#4CAF50', // Verde
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          textDecoration: 'none',
          fontSize: '16px',
        }}
      >
        Contact
      </Link>
    </section>
  );
};

export default CTA;