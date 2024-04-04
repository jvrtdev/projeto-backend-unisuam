import { TypeAnimation } from 'react-type-animation';

const Typewriter = () => {
  return (
    <TypeAnimation
      sequence={[
        'Vrum Drive',
        5000,
        'Carros eletricos',
        3000,
        'Custo beneficios',
        2000,
        'Viaje com segurança',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '0.em', display: 'block' }}
      repeat={Infinity}
    />
  );
};

export default Typewriter