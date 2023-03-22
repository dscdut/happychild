import { Button, Card, Divider } from 'antd';
import BlogDetail1 from '#/assets/images/blog-detail/blog-detail-1.jpeg';
import BlogDetail2 from '#/assets/images/blog-detail/blog-detail-2.jpeg';
import BlogDetail3 from '#/assets/images/blog-detail/blog-detail-3.jpeg';
import BlogDetail4 from '#/assets/images/blog-detail/blog-detail-4.jpeg';

function BlogDetail() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-9 flex flex-col gap-8">
        <Card className="p-5">
          <div className="mb-5 text-3xl">
            Một số triệu chứng thường gặp ở trẻ tự kỷ giúp bố mẹ nhận biết sớm
          </div>
          <Divider />
          <p className="text-lg">
            Nhiều năm trở lại đây, số lượng trẻ bị tự kỷ ngày một tăng cao,
            khiến nhiều bậc phụ huynh lo lắng. Mặc dù, bệnh tự kỷ có thể điều
            trị được nhưng nếu không can thiệp kịp thời thì khả năng hồi phục
            khá thấp. Vậy ở trẻ tự kỷ thường xuất hiện những triệu chứng gì?
            Những đối tượng nào có nguy cơ mắc bệnh cao?
          </p>
          <div>
            <p className="text-2xl">1. Sơ lược về bệnh tự kỷ ở trẻ</p>
            <p>
              tự kỷ không phải là căn bệnh mới của thế giới, tuy nhiên ở Việt
              Nam bệnh lý này chỉ mới thực sự được quan tâm khoảng 10 năm trở
              lại đây. Theo các chuyên gia, tự kỷ là một hội chứng bao gồm nhiều
              rối loạn phát triển lan tỏa với nhiều mức độ (có thể nặng hoặc
              nhẹ). Trong đó, tuổi khởi phát bệnh phổ biến ở trẻ em là 3 tuổi và
              bệnh thường kéo dài theo thời gian.
            </p>
            <p>
              Đánh giá chung về các mặt phát triển, chúng ta có thể thấy ở trẻ
              bị tự kỷ, phần lớn các em đều có những khiếm khuyết trong các lĩnh
              vực như giao tiếp, hành vi và tương tác xã hội. Ngoài ra, trẻ mắc
              bệnh tự kỷ có thể kèm thêm một vài rối loạn liên quan đến cảm giác
              hoặc tăng động, giảm chú ý,... Sự kết hợp nhiều bệnh lý khiến cho
              quá trình điều trị cho trẻ Tự kỷ gặp nhiều khó khăn và kéo dài
              thời gian.
            </p>

            <div className="mb-5 flex items-center justify-center px-10">
              <img src={BlogDetail1} className="w-full" />
            </div>
            <p>
              Theo bác sĩ, tự kỷ là một bệnh lý liên quan đến sự rối loạn phát
              triển của thần kinh. Điển hình như sự biến đổi của cấu trúc thùy
              thái dương, tiểu não hoặc thùy trán. Nếu cấu tạo lưới và sinh hóa
              thần kinh có những bất thường cũng có khả năng gây ra bệnh. Tuy
              nhiên, những cơ sở trên đây vẫn chưa được chứng minh. Dựa trên kết
              quả khảo sát cho thấy, những năm gần đây tỷ lệ mắc bệnh tự kỷ ở
              trẻ tăng lên khá cao. Cụ thể, cứ 100 bé sẽ có 1 bé mắc bệnh và khả
              năng mắc bệnh ở bé trai thường cao hơn bé gái (khoảng 4 - 6 lần).
            </p>
          </div>
          <div>
            <p className="text-2xl">2. Nguyên nhân gây bệnh tự kỷ ở trẻ em</p>
            <p>
              Đến thời điểm hiện tại, vẫn chưa có bất kỳ kết luận nào về nguyên
              nhân dẫn đến bệnh tự kỷ. Tuy nhiên, một số chuyên gia cho rằng căn
              bệnh này có liên quan đến một số yếu tố như:
            </p>
            <ul className=" list-disc">
              <li className="ml-12 mb-5">
                Di truyền: trẻ bị tự kỷ do cấu trúc của não phát triển không
                được hài hòa vì một số gen di truyền gây ảnh hưởng hoặc tổn
                thương tới não.
              </li>

              <div className="flex items-center justify-center px-10">
                <img src={BlogDetail2} className="mb-5 w-full" />
              </div>
              <li className="ml-12 mb-5">
                Giai đoạn mang thai nếu mẹ bầu sinh sống, làm việc trong môi
                trường có nhiều hóa chất hoặc tiếp xúc với chúng thường xuyên
                góp phần tăng nguy cơ mắc bệnh ở trẻ. Một số hóa chất độc hại
                nên tránh tiếp xúc như khói thuốc lá, ma túy, bia rượu,...
              </li>
              <li className="ml-12 mb-5">
                Môi trường sống: những trẻ em sinh sống trong hoàn cảnh gia đình
                phức tạp hoặc không được ba mẹ quan tâm, bỏ mặc thường có nguy
                cơ cao bị tự kỷ.
              </li>
            </ul>
          </div>
          <div>
            <p className="text-2xl">3. Triệu chứng thường gặp ở trẻ bị tự kỷ</p>
            <p>
              Các triệu chứng ở trẻ tự kỷ có thể xuất hiện từ khi trẻ chỉ mới 1
              tuổi, tuy nhiên những biểu hiện này khá mờ nhạt và khó nhận biết.
              Theo thời gian, các triệu chứng dần nhiều hơn, thể hiện rõ rệt và
              trẻ thường được chẩn đoán từ 2 tuổi trở lên. Vậy ở trẻ bị tự kỷ
              thường có những biểu hiện gì? Sau đây là một số dấu hiệu giúp bạn
              nhận biết bệnh dễ dàng:
            </p>
            <p className="text-xl">3.1. Kỹ năng tương tác xã hội kém</p>
            <p>
              trẻ thường thu rút mình, chơi một mình, hạn chế giao tiếp bằng
              mắt, nhu cầu giao tiếp với người khác rất thấp, ít làm theo chỉ
              dẫn, mọi hoạt động đều thực hiện theo ý thích. Phần lớn trẻ không
              khoe khoang, không quan tâm đến lời nói hay cảm xúc của người
              khác. Sự tương tác, gắn bó, tập trung của trẻ thường dành cho đồ
              vật nhiều hơn những người xung quanh.
            </p>

            <div className="mb-5 flex items-center justify-center px-10">
              <img src={BlogDetail3} className="w-full" />
            </div>
            <p className="text-xl">3.2. Ngôn ngữ có nhiều bất thường</p>
            <p>
              Một số trẻ tự kỷ có khả năng phát triển ngôn ngữ rất kém, nói
              không rõ hoặc chậm nói. Bên cạnh đó, cũng có trẻ không nói theo
              hướng dẫn, thường phát âm vô nghĩa. Trẻ có thể chỉ nhại lại lời
              nói của những người xung quanh hoặc chỉ nói khi có nhu cầu gì đó,
              chẳng hạn như muốn đi vệ sinh, muốn ăn, muốn chơi,... Việc trẻ
              thường xuyên hỏi một câu hỏi nhiều lần hoặc không biết cách đặt
              câu hỏi cũng khá phổ biến.
            </p>
            <p>
              Phần lớn trẻ mắc bệnh tự kỷ có vốn từ ngữ nghèo nàn, khả năng diễn
              đạt từ ngữ kém hoặc không biết cách kể chuyện. Giọng nói của trẻ
              cũng có sự khác biệt so với trẻ bình thường, có thể nói rất nhanh,
              nói to, nói giọng lơ lớ,... Những trò chơi mang tính chất xã hội
              hóa, trẻ thường khó tiếp cận hoặc không biết luật chơi.
            </p>
            <p className="text-xl">3.3. Hành vi bất thường</p>
            <p>
              Trong sinh hoạt hằng ngày, trẻ thường có những thói quen, hành vi
              bất thường như đi vòng tròn, đi kiễng gót, nhảy lên, xoay người
              vòng tròn,... Một số thói quen thường lặp lại ở trẻ là chỉ nằm
              đúng một vị trí, chỉ mặc một kiểu quần áo, ngồi đúng một chỗ, chỉ
              đi đúng một đường hoặc chơi đúng một trình tự,...{' '}
            </p>

            <div className="mb-5 flex items-center justify-center px-10">
              <img src={BlogDetail4} className="w-full" />
            </div>
            <p className="text-xl">3.4. Ý thích thu hẹp</p>
            <p>
              Trẻ thường chỉ chú tâm hoặc chỉ chơi một vài trò chơi cố định.
              Cách chơi của trẻ có phần đơn điệu, nhàm chán và lặp lại nhiều
              lần. Trẻ có thể dành nhiều giờ để xem quảng cáo, điện thoại hoặc
              quay bánh xe,... Ngắm tay cũng là một sở thích phổ biến ở trẻ tự
              kỷ và phần lớn các bé đều thường cầm một đồ vật gì đó như bút, đồ
              chơi (mà mình yêu thích), que, giấy,...
            </p>
            <p className="text-xl">3.5. Rối loạn cảm giác</p>
            <p>
              Do thần kinh quá nhạy cảm nên một số trẻ có biểu hiện rối loạn cảm
              giác. Chẳng hạn như trẻ thường sợ hãi khi nghe tiếng động quá to,
              thu mình vào một góc do sợ ánh sáng, sợ cắt móng tay, sợ cắt tóc,
              không muốn người khác chạm vào người,... Hầu như ở các trẻ mắc hội
              chứng tự kỷ thường rất lười nhai và kén ăn. Tuy nhiên, trẻ thích
              chạm vào đồ vật, thích gõ đồ chơi để phát ra tiếng động, quan sát
              đồ vật phát ra ánh sáng hoặc chuyển động (đặc biệt là lăn tròn).
            </p>
            <p>
              Ngoài những biểu hiện trên, một số trẻ tự kỷ có khả năng ghi nhớ
              rất tốt. Điển hình như nhớ số điện thoại, nhớ vị trí các đồ vật,
              biết đọc số rất sớm, thực hiện phép cộng nhanh,... Chính vì thế,
              các bậc phụ huynh dễ nhầm tưởng và cho rằng con mình quá thông
              minh.
            </p>
          </div>
        </Card>
        <Card className="p-5">
          <div className="flex flex-col gap-5">
            <p className="text-3xl">Bình luận</p>
            <div className="flex items-start gap-4">
              <img
                src="https://picsum.photos/200"
                className="h-10 w-10 rounded-full object-cover"
              />
              <Card
                className="flex-grow"
                bodyStyle={{
                  padding: 20,
                }}
              >
                <p className="mb-0 text-color-gray-40">
                  Thêm bình luận của bạn...
                </p>
              </Card>
            </div>
            <div className="flex items-start gap-4">
              <img
                src="https://picsum.photos/300"
                className="h-10 w-10 rounded-full object-cover"
              />
              <Card
                className="flex-grow"
                bodyStyle={{
                  padding: 20,
                }}
              >
                <p className="text-lg">Em Huy - 20/2/2021</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis cupiditate eveniet eligendi saepe blanditiis qui error
                  magni rerum, ex, nisi repellat voluptatibus aut incidunt
                  voluptatum amet dignissimos accusamus impedit repellendus?
                </p>
              </Card>
            </div>
            <div className="flex items-start gap-4">
              <img
                src="https://picsum.photos/100"
                className="h-10 w-10 rounded-full object-cover"
              />
              <Card
                className="flex-grow"
                bodyStyle={{
                  padding: 20,
                }}
              >
                <p className="text-lg">Em Quyên - 20/2/2021</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis cupiditate eveniet eligendi saepe blanditiis qui error
                  magni rerum, ex, nisi repellat voluptatibus aut incidunt
                  voluptatum amet dignissimos accusamus impedit repellendus?
                </p>
              </Card>
            </div>
            <div className="flex items-start gap-4">
              <img
                src="https://picsum.photos/160"
                className="h-10 w-10 rounded-full object-cover"
              />
              <Card
                className="flex-grow"
                bodyStyle={{
                  padding: 20,
                }}
              >
                <p className="text-lg">Em Kiệm - 20/2/2021</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis cupiditate eveniet eligendi saepe blanditiis qui error
                  magni rerum, ex, nisi repellat voluptatibus aut incidunt
                  voluptatum amet dignissimos accusamus impedit repellendus?
                </p>
              </Card>
            </div>
            <div className="flex items-start gap-4">
              <img
                src="https://picsum.photos/150"
                className="h-10 w-10 rounded-full object-cover"
              />
              <Card
                className="flex-grow"
                bodyStyle={{
                  padding: 20,
                }}
              >
                <p className="text-lg">Em Thiên - 20/2/2021</p>
                <p>Trông có vẻ oke hơn lần trước đấy anh ơi</p>
              </Card>
            </div>
          </div>
        </Card>
      </div>
      <div className="col-span-3">
        <div
          className="flex flex-col gap-4"
          style={{
            position: 'sticky',
            top: 'calc(5rem + 16px)',
          }}
        >
          <Card
            hoverable
            headStyle={{
              fontWeight: 600,
            }}
            title={
              <div className="flex items-center gap-4">
                <img
                  src="https://picsum.photos/200/300"
                  className="h-12 w-12 rounded-full object-cover object-center"
                />
                <span>Nguyễn Châu Quang Minh</span>
              </div>
            }
            style={{ width: '100%' }}
          >
            <div className="flex flex-col gap-4">
              <Button type="primary">Theo dõi</Button>
              <div className="flex items-center gap-2">
                Senior tự kỷ || Thao túng tâm lý || Chuyên gia trị liệu || Chúa
                tể lùa gà || Techlead Enouva
              </div>
              <div>
                <p className="mb-1 font-semibold uppercase text-color-gray-30">
                  Địa điểm
                </p>
                <p>Bàn Cò, Ngã Tư, Thừa Thiên Huế</p>
              </div>
              <div>
                <p className="mb-1 font-semibold uppercase text-color-gray-30">
                  Ngày tham gia
                </p>
                <p>24/1/2018</p>
              </div>
            </div>
          </Card>
          <Card
            hoverable
            headStyle={{
              fontWeight: 600,
            }}
            title={
              <div className="flex items-center gap-4">
                Các bài viết khác của Minh
              </div>
            }
            style={{ width: '100%', marginBottom: 38 }}
          >
            <div className="flex flex-col gap-4">
              <div className=" border-b-2 border-color-gray-60 pb-4">
                <div className="text-lg">
                  Trẻ em tự kỷ tại Việt Nam gia tăng, phần lớn không được trị
                  liệu, giáo dục phù hợp
                </div>
                <div className=" text-color-gray-30">
                  #javascript #programming #sympathy #react #webdev
                </div>
              </div>
              <div className=" border-b-2 border-color-gray-60 pb-4">
                <div className="text-lg">
                  Cảnh báo 6 dấu hiệu trẻ bị tự kỷ ba mẹ cần cho bé đi khám ngay
                </div>
                <div className=" text-color-gray-30">
                  #tựkỷ #tổchứcytếthếgiới #bàmẹtủlạnh #chứngtựkỷ
                </div>
              </div>
              <div className=" border-b-2 border-color-gray-60 pb-4">
                <div className="text-lg">
                  Ứng xử với trẻ tự kỷ: Những quan niệm sai lầm thường gặp
                </div>
                <div className=" text-color-gray-30">
                  #javascript #programming #sympathy #react #webdev
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
