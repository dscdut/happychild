import { Image } from 'antd';
import Dauhieutretuky from '#/assets/images/dauhieutretuky.png';

export default function Content1() {
  return (
    <>
      <p>
        <span className="text-base font-bold text-primary-color">
          Developmental delay
        </span>{' '}
        in children occurs when they fall behind their peers in one or more
        areas of emotional, physical or mental development. Early intervention
        is the best way to help a child with developmental delays make progress
        and catch up with other children..
      </p>
      <p>
        In fact, there are many types of developmental delays in infants and
        young children, including the following issues:
      </p>
      <ul className="ml-4 flex flex-col gap-2">
        <li>- Vision or sight</li>
        <li>- Language or speech</li>
        <li>- Motor skills</li>
        <li>- Thinking - cognition skills</li>
        <li>- Social- emotional skills</li>
      </ul>
      <p>
        Sometimes, significant developmental delays in children can occur in two
        or more of these areas. This condition is often referred to as Global
        Developmental Delay (GDD), primarily referring to infants and
        preschoolers up to 5 years old who show signs of developmental delay for
        at least 6 months.
      </p>
      <p>
        However, it is important to distinguish that developmental delay in
        children is not the same as a developmental disability. Developmental
        disabilities often include issues such as hearing loss, cerebral palsy
        or autism spectrum disorder and tend to last a lifetime.
      </p>
      <div className="my-2 flex items-center justify-center">
        <Image preview={false} width={300} src={Dauhieutretuky} />
      </div>
      <p>Common types of developmental delays in children:</p>
      <ul className="ml-4 flex flex-col gap-2">
        <li>- Language and speech delay</li>
        <li>- Delayed development in children in terms of vision</li>
        <li>- Delayed development of motor skills in children</li>
        <li>- Social and emotional retardation in children</li>
        <li>- Cognitive retardation in children</li>
      </ul>
    </>
  );
}
