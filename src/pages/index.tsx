import { useEffect, useState } from 'react';
import { ProfileOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Card } from 'antd';
import { getDatabase, onValue, ref } from 'firebase/database';
import { useNavigate } from 'react-router-dom';

function Index() {
  const navigate = useNavigate();
  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, 'courses');
    onValue(starCountRef, snapshot => {
      const data = snapshot.val();
      console.log(data);
    });
  }, []);
  const [isSubmit, setIsSubmit] = useState(1);
  const handleSubmit = (value: number) => {
    setIsSubmit(value);
  };

  return (
    <div className="grid grid-cols-3 gap-3 p-6">
      <div className="col-span-1 ml-4 space-y-3">
        <Button
          type={isSubmit === 1 ? 'primary' : 'default'}
          shape="round"
          className="flex h-14 w-[26rem] flex-row items-center justify-between whitespace-normal"
          onClick={() => handleSubmit(1)}
        >
          <span className="w-full text-center font-medium">{`Theo dõi và sàng lọc phát triển là gì ?`}</span>
          <RightOutlined style={{ fontSize: '20px', color: '#fff' }} />
        </Button>
        <Button
          type={isSubmit === 2 ? 'primary' : 'default'}
          shape="round"
          className="flex h-14 w-[26rem] flex-row items-center justify-between whitespace-normal"
          onClick={() => handleSubmit(2)}
        >
          <span className="w-full text-center font-medium">{`Vì sao theo dõi và sàng lọc phát triển lại quan trọng?`}</span>
          <RightOutlined style={{ fontSize: '20px', color: '#fff' }} />
        </Button>
        <Button
          type={isSubmit === 3 ? 'primary' : 'default'}
          shape="round"
          className="flex h-14 w-[26rem] flex-row items-center justify-between whitespace-normal"
          onClick={() => handleSubmit(3)}
        >
          <span className="w-full text-center font-medium">{`Chậm phát triển là gì?`}</span>
          <RightOutlined style={{ fontSize: '20px', color: '#fff' }} />
        </Button>
        <Button
          type={isSubmit === 4 ? 'primary' : 'default'}
          shape="round"
          className="flex h-14 w-[26rem] flex-row items-center justify-between whitespace-normal"
          onClick={() => handleSubmit(4)}
        >
          <span className="w-full text-center font-medium">{`Để theo dõi sự phát triển của trẻ tôi cần làm gì?`}</span>
          <RightOutlined style={{ fontSize: '20px', color: '#fff' }} />
        </Button>
        <Button
          type={isSubmit === 5 ? 'primary' : 'default'}
          shape="round"
          className="flex h-14 w-[26rem] flex-row items-center justify-between whitespace-normal"
          onClick={() => handleSubmit(5)}
        >
          <span>{`Khi trẻ em được xác định có nguy cơ chậm phát triển hoặc tự kỷ tôi cần
          làm gì?`}</span>
          <RightOutlined style={{ fontSize: '20px', color: '#fff' }} />
        </Button>
        <Button
          shape="round"
          className="flex h-14 w-[26rem] items-center justify-center gap-4 whitespace-normal bg-secondary-color text-[white]"
          onClick={() => navigate('/assessment')}
        >
          <ProfileOutlined />
          Bắt đầu kiểm tra và đánh giá
          <RightOutlined style={{ fontSize: '20px', color: '#fff' }} />
        </Button>
      </div>
      <div className="col-span-2 ml-6">
        {isSubmit === 1 && (
          <Card className="h-fit w-full rounded-3xl p-4 text-base shadow-lg">
            <p>
              Theo dõi phát triển là quá trình quan sát trẻ lớn lên để xem liệu
              trẻ có đạt các mốc phát triển thông thường khi chơi, học, nói, vận
              động và ứng xử với người khác.
            </p>
            <p>
              Sàng lọc phát triển là việc đánh giá cẩn thận hơn sự phát triển
              của trẻ, để xác định liệu trẻ có nguy cơ rối loạn phát triển hay
              không. A365.vn cung cấp các bài đánh giá sàng lọc phát triển khoa
              học và uy tín cho phụ huynh, giáo viên và cán bộ y tế:
            </p>
            <ul className="list-disc space-y-2 pl-4">
              <li>
                <span className="font-semibold">Bộ câu hỏi ASQ®-3</span> là một
                trong những công cụ sàng lọc phát triển quy chuẩn được khuyến
                cáo sử dụng cho trẻ từ 01 đến 66 tháng tuổi.{' '}
                <a
                  href="https://a365.vn/kien-thuc/bai-viet/gioi-thieu-bo-cong-cu-theo-doi-phat-trien-asq-3-df1c54e3f5"
                  className="text-primary-color"
                >
                  Đọc thêm về ASQ®-3
                </a>{' '}
                hoặc{' '}
                <a
                  href="https://a365.vn/theo-doi-phat-trien/lua-chon-sang-loc?t=ASQ"
                  className="text-primary-color"
                >
                  Làm ASQ ngay
                </a>
              </li>
              <li>
                <span className="font-semibold">
                  Bảng kiểm M-CHAT-R và MCHAT R/F
                </span>{' '}
                là công cụ sàng lọc nguy cơ rối loạn tự kỷ cho trẻ từ 16-30
                tháng.{' '}
                <a
                  href="https://a365.vn/kien-thuc/bai-viet/gioi-thieu-bo-cong-cu-sang-loc-nguy-co-tu-ky-m-chat-r-9549a30878"
                  className="text-primary-color"
                >
                  Đọc thêm về M-CHAT-R
                </a>
                {' hoặc '}
                <a
                  href="https://a365.vn/theo-doi-phat-trien/lua-chon-sang-loc?t=MCHATR"
                  className="text-primary-color"
                >
                  Làm M-CHAT-R ngay
                </a>
              </li>
              <li>
                <span className="font-semibold">Bảng kiểm PSC</span> là công cụ
                sàng lọc những vấn đề về cảm xúc và hành vi cho trẻ từ 4 đến 16
                tuổi.{' '}
                <a
                  href="https://a365.vn/kien-thuc/bai-viet/gioi-thieu-bo-cong-cu-sang-loc-nhung-van-de-ve-cam-xuc-va-hanh-vi-psc-6c4e17a922"
                  className="text-primary-color"
                >
                  Đọc thêm về PSC
                </a>
                {' hoặc '}
                <a
                  href="https://a365.vn/kien-thuc/bai-viet/gioi-thieu-bo-cong-cu-sang-loc-nhung-van-de-ve-cam-xuc-va-hanh-vi-psc-6c4e17a922"
                  className="text-primary-color"
                >
                  Làm PSC ngay
                </a>
              </li>
              <li>
                <span className="font-semibold">
                  Bộ sàng lọc các vấn đề về giấc ngủ CSHQ{' '}
                </span>
                là công cụ sàng lọc những vấn đề liên quan đến giấc ngủ cho trẻ
                từ 48 tháng đến 12 tuổi.{' '}
                <a
                  href="https://a365.vn/kien-thuc/bai-viet/gioi-thieu-bo-cong-cu-sang-loc-nhung-van-de-ve-cam-xuc-va-hanh-vi-psc-6c4e17a922"
                  className="text-primary-color"
                >
                  Đọc thêm về CSHQ
                </a>
                {' hoặc '}
                <a
                  href="https://a365.vn/kien-thuc/bai-viet/gioi-thieu-bo-cong-cu-sang-loc-nhung-van-de-ve-cam-xuc-va-hanh-vi-psc-6c4e17a922"
                  className="text-primary-color"
                >
                  Làm CSHQ ngay
                </a>
              </li>
              <li>
                <span className="font-semibold">Bảng kiểm BAMBI </span>
                là bộ công cụ sàng lọc những vấn đề hành vi liên quan đến ăn
                uống ở trẻ tự kỷ từ 2 đến dưới 11 tuổi. Đọc thêm về BAMBI hoặc
                Làm BAMBI ngay
              </li>
              <li>
                <span className="font-semibold">
                  Bộ công cụ sàng lọc nguy cơ rối loạn Tăng động- Giảm chú ý:
                </span>
                Bộ công cụ sàng lọc nguy cơ rối loạn Tăng động- Giảm chú ý: là
                công cụ giúp sàng lọc nguy cơ Tăng động- Giảm chú ý và các rối
                loạn liên quan dành cho trẻ từ 6-12 tuổi.{' '}
                <a
                  href="https://a365.vn/kien-thuc/bai-viet/gioi-thieu-bo-cong-cu-sang-loc-nhung-van-de-ve-cam-xuc-va-hanh-vi-psc-6c4e17a922"
                  className="text-primary-color"
                >
                  Đọc thêm về VADRS
                </a>
                {' và '}
                <a
                  href="https://a365.vn/kien-thuc/bai-viet/gioi-thieu-bo-cong-cu-sang-loc-nhung-van-de-ve-cam-xuc-va-hanh-vi-psc-6c4e17a922"
                  className="text-primary-color"
                >
                  làm VADRS ngay
                </a>
              </li>
            </ul>
          </Card>
        )}
        {isSubmit === 2 && (
          <Card className="h-fit w-full rounded-3xl p-4 text-base shadow-lg">
            <ul className="space-y-4">
              <li>
                Nếu vấn đề chậm phát triển ở trẻ không được phát hiện sớm, trẻ
                sẽ không nhận được sự hỗ trợ cần thiết và kịp thời. Điều này
                khiến trẻ gặp khó khăn khi đến trường, hòa nhập xã hội và sống
                độc lập về sau.
              </li>
              <li>
                Theo số liệu thống kê của Mỹ, có tới 17% trẻ trong độ tuổi từ
                3-17 có một hoặc nhiều khuyết tật phát triển và hành vi, như{' '}
                <a
                  href="https://a365.vn/kien-thuc/bai-viet/gioi-thieu-bo-cong-cu-theo-doi-phat-trien-asq-3-df1c54e3f5"
                  className="text-primary-color"
                >
                  rối loạn phổ tự kỷ
                </a>{' '}
                ,{' '}
                <a
                  href="https://a365.vn/kien-thuc/bai-viet/gioi-thieu-bo-cong-cu-theo-doi-phat-trien-asq-3-df1c54e3f5"
                  className="text-primary-color"
                >
                  khuyết tật trí tuệ
                </a>{' '}
                (còn được gọi là chậm phát triển trí tuệ) , khó khăn về học,
                <a
                  href="https://a365.vn/kien-thuc/bai-viet/gioi-thieu-bo-cong-cu-theo-doi-phat-trien-asq-3-df1c54e3f5"
                  className="text-primary-color"
                >
                  tăng động giảm chú ý (ADHD)
                </a>{' '}
                . Bên cạnh đó, có nhiều trẻ có các rối loạn về phát triển về
                ngôn ngữ cũng như những lĩnh vực khác. Tuy nhiên, chưa đến một
                nửa những trẻ{' '}
                <a
                  href="https://a365.vn/kien-thuc/bai-viet/gioi-thieu-bo-cong-cu-theo-doi-phat-trien-asq-3-df1c54e3f5"
                  className="text-primary-color"
                >
                  khuyết tật phát triển
                </a>{' '}
                này được phát hiện trước khi vào cấp 1.
              </li>
            </ul>
          </Card>
        )}
        {isSubmit === 3 && (
          <Card className="h-fit w-full rounded-3xl p-4 text-base shadow-lg">
            <ul className="space-y-4">
              <li>
                Các thể hiện về nhận thức, cảm xúc, và kỹ năng như mỉm cười, với
                tay, chỉ tay, vẫy tay “tạm biệt”, bước đi đầu tiên được gọi là
                những mốc phát triển. Trẻ sẽ thể hiện và đạt được các mốc phát
                triển này thông qua các hoạt động hàng ngày như: chơi, ăn, học,
                nói, cư xử và vận động.
              </li>
              <li className="font-semibold">
                Khi trẻ của bạn không đạt được những mốc phát triển tại cùng
                thời điểm như những trẻ em khác có cùng độ tuổi, thì có thể coi
                là chậm phát triển.
              </li>
            </ul>
          </Card>
        )}
        {isSubmit === 4 && (
          <Card className="h-fit w-full rounded-3xl p-4 text-base shadow-lg">
            <p>
              Nếu bạn là người trực tiếp chăm sóc trẻ, bạn có thể kiểm tra các
              mốc phát triển của trẻ do Trung tâm phòng chống dịch bệnh (CDC)
              của Mỹ xây dựng. Bạn cũng có thể tự thực hiện{' '}
              <a
                href="https://a365.vn/kien-thuc/bai-viet/gioi-thieu-bo-cong-cu-theo-doi-phat-trien-asq-3-df1c54e3f5"
                className="text-primary-color"
              >
                bộ câu hỏi ASQ®-3
              </a>{' '}
              để biết được con mình có phát triển tương đương với các trẻ khác
              hay có nguy cơ chậm phát triển hay không. Nếu bạn băn khoăn liệu
              con mình có nguy cơ tự kỷ hay không, bạn có thể làm bài . Hay nếu
              bạn lo lắng về các vấn đề về cảm xúc và hành vi của con, bạn có
              thể làm bài . Dựa vào kết quả ban đầu của bài kiểm tra, bạn sẽ có
              cơ sở để quyết định có nên đưa trẻ đến gặp cán bộ y tế hay không?
            </p>
            <div className="my-2">Nếu bạn băn khoăn liệu con mình:</div>
            <ul className="my-3 list-disc space-y-2 pl-4">
              <li>
                Có nguy cơ tự kỷ hay không, bạn có thể làm bộ công cụ{' '}
                <a
                  href="https://a365.vn/kien-thuc/bai-viet/gioi-thieu-bo-cong-cu-sang-loc-nhung-van-de-ve-cam-xuc-va-hanh-vi-psc-6c4e17a922"
                  className="text-primary-color"
                >
                  M-CHAT.
                </a>
              </li>
              <li>
                Có các vấn đề về cảm xúc và hành vi, bạn có thể làm làm bộ công
                cụ{' '}
                <a
                  href="https://a365.vn/kien-thuc/bai-viet/gioi-thieu-bo-cong-cu-sang-loc-nhung-van-de-ve-cam-xuc-va-hanh-vi-psc-6c4e17a922"
                  className="text-primary-color"
                >
                  PSC.
                </a>
              </li>
              <li>
                Có các vấn đề về giấc ngủ, bạn có thể làm bộ làm bộ công cụ{' '}
                <a
                  href="https://a365.vn/kien-thuc/bai-viet/gioi-thieu-bo-cong-cu-sang-loc-nhung-van-de-ve-cam-xuc-va-hanh-vi-psc-6c4e17a922"
                  className="text-primary-color"
                >
                  CSHQ.
                </a>
              </li>
              <li>
                Có các vấn đề về ăn uống, bạn có thể làm bộ sàng lọc về hành vi
                trong lúc ăn ở trẻ tự kỷ{' '}
                <a
                  href="https://a365.vn/kien-thuc/bai-viet/gioi-thieu-bo-cong-cu-sang-loc-nhung-van-de-ve-cam-xuc-va-hanh-vi-psc-6c4e17a922"
                  className="text-primary-color"
                >
                  BAMBI.
                </a>
              </li>
              <li>
                Có vấn đề về Tăng động- giảm chú ý, bạn có thể làm bộ{' '}
                <a
                  href="https://a365.vn/kien-thuc/bai-viet/gioi-thieu-bo-cong-cu-sang-loc-nhung-van-de-ve-cam-xuc-va-hanh-vi-psc-6c4e17a922"
                  className="text-primary-color"
                >
                  VADRS.
                </a>
              </li>
            </ul>
            <p>
              Dựa vào kết quả ban đầu của bài kiểm tra, bạn sẽ có cơ sở để quyết
              định có nên đưa trẻ đến gặp cán bộ y tế hay không?
            </p>
          </Card>
        )}
        {isSubmit === 5 && (
          <Card className="h-fit w-full rounded-3xl p-4 text-base shadow-lg">
            <ul className="space-y-3">
              <li>
                Các cán bộ y tế (có thể là một nhóm đa ngành về nhi khoa, tâm
                lý, phục hồi chức năng) sẽ thực hiện thêm các đánh giá chuyên
                sâu về các lĩnh vực cần quan tâm, sử dụng các bảng hỏi, bản kiểm
                quan sát chi tiết nhằm đưa ra được kết luận về sự phát triển của
                trẻ. Thông qua đó cán bộ y tế có thể xác định tình trạng rối
                loạn phát triển của trẻ và gợi ý liệu trẻ có cần can thiệp hay
                không và nên can thiệp như thế nào.
              </li>
              <li>
                Khi trẻ được chẩn đoán rối loạn phát triển, hoặc tự kỷ, hoặc
                ngay khi trẻ mới có kết quả có nguy cơ chậm phát triển, hoặc
                nguy cơ tự kỷ, Hãy vào mục{' '}
                <a
                  href="https://a365.vn/kien-thuc/bai-viet/gioi-thieu-bo-cong-cu-theo-doi-phat-trien-asq-3-df1c54e3f5"
                  className="text-primary-color"
                >
                  Hướng dẫn can thiệp
                </a>{' '}
                để tiếp cận với các kiến thức, chiến lược can thiệp và các video
                bài tập can thiệp mẫu cho trẻ tại nhà.
              </li>
            </ul>
          </Card>
        )}
      </div>
    </div>
  );
}

export default Index;
