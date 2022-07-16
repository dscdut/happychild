import { Button, Card } from 'antd';

function BlogDetail() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-9 flex flex-col gap-8">
        <Card className="p-5">
          <div className="mb-5 text-3xl">
            Signs and Symptoms of Autism Spectrum Disorder
          </div>
          <div className="mb-2">
            Autism spectrum disorder (ASD) is a developmental disability caused
            by differences in the brain. People with ASD often have problems
            with social communication and interaction, and restricted or
            repetitive behaviors or interests. People with ASD may also have
            different ways of Tìm hiểu thêming, moving, or paying attention. It
            is important to note that some people without ASD might also have
            some of these symptoms. But for people with ASD, these
            characteristics can make life very challenging.
          </div>
          <div className="mb-6">
            <a href="#">Tìm hiểu thêm more about ASD</a>
          </div>
          <div className="mb-4">
            <div className="text-xl">
              Social Communication and Interaction Skills
            </div>
            <p>
              Social communication and interaction skills can be challenging for
              people with ASD.
            </p>
            <div className="my-2 flex justify-center">
              <img src="https://picsum.photos/300/200" />
            </div>
            <p>
              Examples of social communication and social interaction
              characteristics related to ASD can include
            </p>
          </div>
          <div className="mb-4">
            <div className="text-xl">
              Social Communication and Interaction Skills
            </div>
            <p>
              Social communication and interaction skills can be challenging for
              people with ASD.
            </p>
            <div className="my-2 flex justify-center">
              <img src="https://picsum.photos/300/200" />
            </div>
            <p>
              Examples of social communication and social interaction
              characteristics related to ASD can include
            </p>
          </div>
          <div className="mb-4">
            <div className="text-xl">
              Social Communication and Interaction Skills
            </div>
            <p>
              Social communication and interaction skills can be challenging for
              people with ASD.
            </p>
            <div className="my-2 flex justify-center">
              <img src="https://picsum.photos/300/200" />
            </div>
            <p>
              Examples of social communication and social interaction
              characteristics related to ASD can include
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
