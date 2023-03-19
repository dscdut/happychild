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
            Some common symptoms in children with autism help parents recognize
            early{' '}
          </div>
          <Divider />
          <p className="text-lg">
            In recent years, the number of children with autism has increased,
            causing many parents to worry. Although autism can be treated,
            without timely intervention, the chance of recovery is quite low.
            So, what are the common symptoms in children with autism? Who are at
            high risk for the disease?
          </p>
          <div>
            <p className="text-2xl">1. Summary of autism in children</p>
            <p>
              Autism is not a new disease of the world, but in Vietnam this
              disease has only been really concerned about 10 years ago.
              According to experts, autism is a syndrome that includes many
              pervasive developmental disorders with many degrees (which can be
              severe or mild). In which, the common age of onset of the disease
              in children is 3 years old and the disease usually lasts over
              time.
            </p>
            <p>
              In general, in terms of development, we can see that in children
              with autism, most of them have deficits in areas such as
              communication, behavior and social interaction. In addition,
              children with autism may be accompanied by a few sensory disorders
              or hyperactivity, attention deficit,... The combination of many
              diseases makes the treatment process for children with autism more
              difficult. difficult and time consuming.
            </p>

            <div className="mb-5 flex items-center justify-center px-10">
              <img src={BlogDetail1} className="w-full" />
            </div>
            <p>
              According to doctors, autism is a disease related to a
              neurological development disorder. Typically, changes in the
              structure of the temporal lobe, the cerebellum, or the frontal
              lobe. If there are abnormalities in the reticular structure and
              neurochemistry, it is also likely to cause disease. However, the
              above grounds are still unproven. Based on the survey results, in
              recent years, the rate of autism in children has increased quite
              high. Specifically, 1 out of every 100 babies will have the
              disease and the chance of getting the disease in boys is usually
              higher than in girls (about 4-6 times).
            </p>
          </div>
          <div>
            <p className="text-2xl">2. Causes of autism in children</p>
            <p>
              Up to now, there has not been any conclusion about the cause of
              autism. However, some experts believe that the disease is related
              to a number of factors such as:
            </p>
            <ul className=" list-disc">
              <li className="ml-12 mb-5">
                Heredity: children with autism due to the structure of the brain
                development is not harmonious because some inherited genes
                affect or damage the brain.
              </li>

              <div className="flex items-center justify-center px-10">
                <img src={BlogDetail2} className="mb-5 w-full" />
              </div>
              <li className="ml-12 mb-5">
                During pregnancy, if the pregnant mother lives, works in an
                environment with many chemicals or is exposed to them regularly,
                it contributes to an increased risk of disease in the baby. Some
                harmful chemicals should be avoided such as tobacco smoke,
                drugs, alcohol,...
              </li>
              <li className="ml-12 mb-5">
                Living environment: children who live in complex family
                situations or are not cared for or neglected by their parents
                are often at high risk of autism.
              </li>
            </ul>
          </div>
          <div>
            <p className="text-2xl">
              3. Common symptoms in children with autism
            </p>
            <p>
              Symptoms in children with autism can appear from as young as 1
              year old, but these manifestations are quite faint and difficult
              to recognize. Over time, the symptoms become more and more
              pronounced, and children are usually diagnosed at 2 years of age
              or older. So, what are the common symptoms in children with
              autism? Here are some signs to help you recognize the disease
              easily:
            </p>
            <p className="text-xl">3.1. Poor social interaction skills</p>
            <p>
              Children often withdraw, play alone, limit eye contact, need to
              communicate with others is very low, rarely follow instructions,
              all activities are done according to their liking. Most kids don't
              brag, don't care about other people's words or feelings.
              Children's interaction, attachment, and concentration are often
              more devoted to objects than to people around them.
            </p>

            <div className="mb-5 flex items-center justify-center px-10">
              <img src={BlogDetail3} className="w-full" />
            </div>
            <p className="text-xl">3.2. Ngôn ngữ có nhiều bất thường</p>
            <p>
              Some children with autism have very poor language development,
              slurred speech, or delayed speech. Besides, there are also
              children who do not speak according to instructions, often
              pronouncing nonsense. Children may only imitate the words of those
              around them or only speak when there is a need, such as wanting to
              go to the bathroom, want to eat, want to play, ... Children often
              ask the same question many times. or not knowing how to ask a
              question is also quite common.
            </p>
            <p>
              Most children with autism have poor vocabulary, poor verbal
              ability, or no idea how to tell stories. Children's voices are
              also different from normal children, can speak very fast, speak
              loudly, speak indistinctly, ... The games are socializing,
              children are often difficult to approach or do not know rule.
            </p>
            <p className="text-xl">3.3. Abnormal behavior</p>
            <p>
              In daily activities, children often have unusual habits and
              behaviors such as walking in circles, walking on tiptos, jumping
              up, turning around, etc. one position, wearing only one style of
              clothing, sitting in the same place, walking in only one
              direction, or playing in the same sequence,...{' '}
            </p>

            <div className="mb-5 flex items-center justify-center px-10">
              <img src={BlogDetail4} className="w-full" />
            </div>
            <p className="text-xl">3.4. Narrow likes</p>
            <p>
              Children often pay attention or play only a few fixed games. The
              way children play is somewhat monotonous, boring and repetitive.
              Children can spend many hours looking at advertisements, phones or
              spinning wheels, etc. Hand-watching is also a popular hobby among
              children with autism and most children often hold an object such
              as a pen, toys (which I love), sticks, paper,...
            </p>
            <p className="text-xl">3.5. Sensory disturbances</p>
            <p>
              Because the nerves are too sensitive, some children have sensory
              disturbances. For example, children are often afraid when they
              hear loud noises, cower in a corner due to fear of light, fear of
              cutting nails, fear of cutting their hair, not wanting others to
              touch them, etc. Autistic syndrome is often very lazy to chew and
              picky eaters. However, children love to touch things, like to
              knock on toys to make noises, and to observe objects that emit
              light or move (especially rolling).
            </p>
            <p>
              In addition to the above manifestations, some children with autism
              have very good memory skills. Typically, remembering phone
              numbers, remembering the location of objects, knowing how to read
              numbers very early, performing addition quickly, ... Therefore,
              parents are easily confused and think that their children are too
              smart.
            </p>
          </div>
        </Card>
        <Card className="p-5">
          <div className="flex flex-col gap-5">
            <p className="text-3xl">Comment</p>
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
                <p className="mb-0 text-color-gray-40">Add your comment...</p>
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
                  Location
                </p>
                <p>Bàn Cò, Ngã Tư, Thừa Thiên Huế</p>
              </div>
              <div>
                <p className="mb-1 font-semibold uppercase text-color-gray-30">
                  Join Date
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
              <div className="flex items-center gap-4">More posts by Minh</div>
            }
            style={{ width: '100%', marginBottom: 38 }}
          >
            <div className="flex flex-col gap-4">
              <div className=" border-b-2 border-color-gray-60 pb-4">
                <div className="text-lg">
                  Children with autism in Vietnam are increasing, most of them
                  do not receive appropriate treatment and education
                </div>
                <div className=" text-color-gray-30">
                  #javascript #programming #sympathy #react #webdev
                </div>
              </div>
              <div className=" border-b-2 border-color-gray-60 pb-4">
                <div className="text-lg">
                  Warn 6 signs of children with autism, parents need to take
                  their baby to the doctor right away
                </div>
                <div className=" text-color-gray-30">#autism #WHO #Parent</div>
              </div>
              <div className=" border-b-2 border-color-gray-60 pb-4">
                <div className="text-lg">
                  Dealing with Autistic Children: Common Misconceptions
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
