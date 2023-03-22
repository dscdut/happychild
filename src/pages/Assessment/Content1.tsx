import { Image } from 'antd';
import Dauhieutretuky from '#/assets/images/dauhieutretuky.jpg';

export default function Content1() {
  return (
    <>
      <p>
        <span className="text-base font-bold text-primary-color">
          Tình trạng chậm phát triển
        </span>{' '}
        ở trẻ xảy ra khi bé bị tụt lại đằng sau so với các bạn đồng trang lứa
        trong một hoặc nhiều lĩnh vực về mặt cảm xúc, thể chất hoặc tinh thần.
        Nếu trẻ bị chậm phát triển, việc điều trị bệnh sớm là cách tốt nhất giúp
        bé tiến bộ và bắt kịp với những đứa trẻ khác.
      </p>
      <p>
        Thực tế, có nhiều dạng chậm phát triển ở trẻ sơ sinh và trẻ nhỏ, bao gồm
        các vấn đề sau đây:
      </p>
      <ul className="ml-4 flex flex-col gap-2">
        <li>- Thị lực hoặc tầm nhìn</li>
        <li>- Ngôn ngữ hoặc lời nói</li>
        <li>- Kỹ năng vận động</li>
        <li>- Kỹ năng tư duy - nhận thức</li>
        <li>- Kỹ năng xã hội – tình cảm</li>
      </ul>
      <p>
        Đôi khi, sự chậm phát triển đáng kể ở trẻ có thể xảy ra ở hai hoặc nhiều
        lĩnh vực trên. Tình trạng này thường được gọi là chậm phát triển toàn
        diện (GDD), chủ yếu đề cập đến trẻ sơ sinh và trẻ mẫu giáo đến 5 tuổi có
        dấu hiệu chậm phát triển kéo dài ít nhất 6 tháng.
      </p>
      <p>
        Tuy nhiên, chúng ta cần phân biệt được rằng chậm phát triển ở trẻ không
        giống với khuyết tật phát triển. Tình trạng khuyết tật phát triển thường
        bao gồm các vấn đề như khiếm thính, bại não hoặc rối loạn phổ tự kỷ, có
        xu hướng kéo dài suốt đời.
      </p>
      <div className="my-2 flex items-center justify-center">
        <Image preview={false} width={300} src={Dauhieutretuky} />
      </div>
      <p>Các dạng chậm phát triển phổ biến ở trẻ</p>
      <ul className="ml-4 flex flex-col gap-2">
        <li>- Chậm phát triển về ngôn ngữ và lời nói</li>
        <li>- Chậm phát triển ở trẻ về thị lực</li>
        <li>- Chậm phát triển các kỹ năng vận động ở trẻ</li>
        <li>- Sự chậm phát triển về mặt xã hội và cảm xúc ở trẻ</li>
        <li>- Chậm phát triển nhận thức ở trẻ</li>
      </ul>
    </>
  );
}
