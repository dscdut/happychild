import { Steps , Button ,message , Card , Typography , Input } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import React, { useState , useEffect} from 'react'
import { getDatabase, onValue, ref } from 'firebase/database';


interface content{
    description : string;
    id : number;
    image : string;
    title: string;
}
interface skill{
    content:Array<content>;
    description : string;
    id : number;
    skillName: string;
}
interface intervention{
    id : number;
    skill : Array<skill>;
    stageName:string;
}
interface routeName{
  name : string
}

const RouteKid:React.FC<routeName> = ({name}) => {//name is the age prop 
    const [intervent,setIntervent] = useState<intervention[]>([])
    const { Title, Paragraph, Text, Link } = Typography;
    const [routeName,setRouteName] = useState('');
    const [current, setCurrent] = useState(0);
    const [currentSkill, setCurrentSkill] = useState(0);
    const [id, setID] = useState(0);

    //Get data from database
    useEffect(() =>{
    const db = getDatabase();
    const list = ref(db,'intervention');
    onValue(list , snap => {
      const temp = snap.val();
      setIntervent(temp);
    });
    },[]);

    //declare tag
    const { Step } = Steps;
    const { TextArea } = Input;

    //data
    const steps = [
    {
      title: 'First',
      content: 'Choose the age for your route',
    },
    {
      title: 'Second',
      content: 'Review the route',
    },
    {
      title: 'Last',
      content: 'In conclution',
    },];
    



  return (
  <>
    <Steps current={current} >
          <Step className='cursor-pointer' title={steps[0].title} description={steps[0].content} onClick={()=> setCurrent(0)}/>
          <Step className='cursor-pointer' title={steps[1].title} description={steps[1].content} onClick={()=> setCurrent(1)}/>
          <Step className='cursor-pointer' title={steps[2].title} description={steps[2].content} onClick={()=> setCurrent(2)}/>
    </Steps>

      <div className='mt-8 text-xl text-color-dark-blue'>
         {steps[current].content}</div>
      <div 
      style={{
        minHeight: "50vh",
        border: "1px dashed #000",
        borderRadius: "1rem",
        marginTop:"1rem"

        }} className="bg-primary">
        {current == 0 &&(
          <>
            <Card title="Age" className='mx-3'>
                {intervent?.map(i => {
                  return <Card.Grid style={{width : '25%' , textAlign :'center' , margin : '0'}} onClick={()=>{setRouteName(i.stageName); setCurrent(current+1);setCurrentSkill(0)}}>
                    <div className="grid grid-cols-2 gap-8">
                        <img className='w-40 ml-4' src="https://images.unsplash.com/photo-1627639679638-8485316a4b21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGtpZHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                        <p className='self-center'>{i.stageName}</p>
                    </div>
                      </Card.Grid>
                })}
            </Card>
          </>
        )

        }
        {current == 1 && (
          <div className='my-5 mx-8'>
            <>
            {intervent?.map(i => {
                console.log(i);
                if(i.stageName == routeName){
                    
                    return <>
                    <div> This is route for {i.stageName}</div>
                    <Steps current={currentSkill} direction="vertical">
                      {i.skill?.map(s => {
                        return <>
                           <Step title={s.skillName} description={s.description} onClick={()=>{setCurrentSkill(s.id-1)}}/>
                        </>    
                                              
                      }
                      )}
                    </Steps>
                    { i.skill?.map(s => 
                      s.id == currentSkill+1 && (
                      <Card type="inner" title={s.skillName} extra={<a href="#">More</a>}>
                              <>
                              <div className="grid grid-cols-2 gap-10 ">
                                <div className='col-span-1'>
                                  {s.content?.map(c =>{
                                return <>
                                <p className="text-base text-color-accent-blue">{s.description}</p>
                                <p className='text-justify'>{c.description}</p>
                                </>
                                }
                                )}
                                </div>
                                {s.content?.map(c =>{
                                return <>
                                                                
                                  {c.image && (<>
                                  <img src={c.image} alt="" className='w-164 justify-self-center'/>
                                  
                                </>
                                )}
                                </>
                              })}
                              </div>
                              </>
                      </Card> )
                    )}                       
                    </>
                }    
            })}
            </>
          </div>
        )}
        { current == 2 && (
          <div className='mx-5 my-5 grid grid-cols-2 gap-10'>
            <div>
              <Title level={2} className="text-primary-color">Thank you <SmileOutlined /></Title>
              <Paragraph>
                Thank you for coming today, and thank you for your attention and consideration.
              </Paragraph>
              <Paragraph>
              <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, totam aperiam voluptatem deleniti libero ipsa laborum eligendi tempore hic deserunt.</blockquote>
              <pre>
                <Title level={4} className="text-primary-color">Source</Title>
                <ul>
                <li>
                  <Link href="#">Link 1 </Link>
                </li>
                <li>
                  <Link href="#">Link 2</Link>
                </li>
                <li>
                  <Link href="#">Link 3</Link>
                </li>
              </ul>
              </pre>
            </Paragraph>
            </div>
            <TextArea rows={10} placeholder="Give your feedback here ..." maxLength={6} />
          </div>
        )

        }
      </div>

      {/* Button part */}
      <div className='my-8'>
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => setCurrent(current - 1)}>
            Previous
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => setCurrent(current + 1)}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}

      </div>
  </>
  )
}

export default RouteKid