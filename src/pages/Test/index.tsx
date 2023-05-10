import { CalendarOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { Button, Card, Checkbox, Steps } from 'antd';
import { DataSnapshot, getDatabase, onValue, ref } from 'firebase/database';
import { Divider, List, Typography } from 'antd';
import {  Radio, Space ,message  } from 'antd';
const { Title, Paragraph, Text} = Typography;
import { Tabs } from 'antd';
import kid from "#/assets/images/test/kid.jpg"

interface answers{
  content :string;
  id : number;
  point : number
}

interface content{
  answers :Array<answers>;
  description: string 
  title : string
}

interface questions{
  content : Array<content>;
  id : number;
  skill:string;
}

interface asq {
  id: number;
  questions : Array<questions>;
  stageName : string;
}


function Test() {
  const [ques, setQuest] = useState<asq[]>([]);
  const [point,setPoint] = useState(0);
  const [current, setCurrent] = useState(0);
  const [checkAge,setcheckAge] = useState(false)
  const [Age,setAge] = useState("");
  useEffect(() =>{
    const db = getDatabase();
    const list = ref(db,'asq');
    onValue(list , snap => {
      const temp = snap.val();
      setQuest(temp);
    });
    
  },[]);
  
  
  const steps = [
  {
    title: 'First',
    content: 'First-content',
  },
  {
    title: 'Second',
    content: 'Second-content',
  },
  {
    title: 'Last',
    content: 'Last-content',
  },
];

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  
  return (
    <>
     <Steps current={current} />
     <Title>{steps[current].content}</Title>

      <div style={{
        minHeight: "50vh",
        border: "1px dashed #000",
        borderRadius: "1rem",
        marginTop:"1rem"

        }} className="bg-primary">
          {current < 1 && (
            <>
          <Title level={3} className="my-3 mx-2 text-secondary-color text-center">Please choose your age</Title>
          <Radio.Group
            //  optionType="button"
            //  buttonStyle="solid"
            // size='large'
            className='my-2 w-full flex justify-center flex-wrap'
          >
            
            <Radio className='mx-10' value="3-6 months" onClick={() => {setcheckAge(true) , setAge("zero-to-3-months")}}>
              <img src={kid} className="-ml-6" style={{maxWidth:"30vh",minHeight:"20vh",borderRadius:"3rem",alignItems:"center"}} />
              <div className='my-5 mx-3 ' style={{fontSize:"2rem"}}>
                3-6 months
              </div>
            </Radio>
            <Radio className='mx-10' value="6-8 months" onClick={() => {setcheckAge(true) , setAge("3-to-6-months")}}>
              <img src={kid} className="-ml-6" style={{maxWidth:"30vh",minHeight:"20vh",borderRadius:"3rem"}} />
              <div className='my-5 mx-3' style={{fontSize:"2rem"}}>
                6-8 months
              </div>
            </Radio>
            <Radio className='mx-10' value="8-10 months" onClick={() => setcheckAge(true)}>
              <img src={kid} className="-ml-6" style={{maxWidth:"30vh",minHeight:"20vh",borderRadius:"3rem"}} />
              <div className='my-5 mx-3' style={{fontSize:"2rem"}}>
                8-10 months
              </div>
            </Radio>
          </Radio.Group>
          </>
        )}
      
        
        {/* Do the ASQ test */}
        {
            current === 1 && (
                <>
                {ques?.map(e => {
                      console.log(e)
                      if(e.stageName == "0 - under 3 months old") return <div className='my-5 mx-5'>
                      
                          <Title level={2} className='text-primary-color'>Test for {e.stageName}</Title> 
                          <Tabs>    
                              {e.questions?.map(q => 
                              {
                              return <>

                                  <Tabs.TabPane
                                    tabKey={q.id.toString()}
                                    key={q.id}
                                    tab={<Typography>{q.skill}</Typography>}
                                  >
                                    {q.content.map(c => {
                                    return (
                                      <Card className='my-5'  bordered={true} style={{ width: '100%' , }}>
                                        <Typography>{c.description}</Typography>
                                        <Divider />
                                        <Radio.Group >
                                          <Space direction="vertical">
                                            {
                                              c.answers.map(a => {
                                                return <Radio onClick={()=>{setPoint(point + a.point);}} value={a.point}>{a.content}</Radio>
                                              })
                                            }
                                          </Space>
                                      </Radio.Group>
                                      </Card>
                                    )
                                  })}
                                  </Tabs.TabPane>
                                  {/* <Title level={3} className='text-secondary-color'>Skill : {q.skill}<br/></Title>
                                  {q.content.map(c => {
                                    return (
                                      <Card className='my-5' title={c.description} bordered={true} style={{ width: '100%' }}>
                                        <Radio.Group >
                                          <Space direction="vertical">
                                            {
                                              c.answers.map(a => {
                                                return <Radio onClick={()=>{setPoint(point + a.point);}} value={a.point}>{a.content}</Radio>
                                              })
                                            }
                                          </Space>
                                      </Radio.Group>
                                      </Card>
                                    )
                                  })} */}
                                  
                              </>
                            }
                            )}
                          </Tabs>
                    </div>})}
                </>
                )}

        </div>
        <div style={{
          marginTop: "24px",
        }}>
          {/* //Choose the age */}
          {
              current === 0 && checkAge && (
                <Button type="primary" onClick={() => {next();setcheckAge(false)}}>
                  Next
                </Button>
              )
          }
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
              Previous
            </Button>
          )}
          {current < steps.length - 1 && current >0 && (
            <Button type="primary" onClick={() => next()}>
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
  );
}

export default Test;
