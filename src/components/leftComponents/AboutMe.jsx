import { PhoneOutlined, MailOutlined, HomeOutlined, GithubFilled } from '@ant-design/icons';

export default function AboutMe() {
    return (
        <div className="aboutMe">
            <h2>About Me</h2>
            <p>I graduated from Industrial University of Ho Chi Minh City, Viet Nam, with the major of Information Technology in 2022.
                I am a cheeful, sociable, enthusiastic, and positive person. I have a strong passion for programming. I also enjoy listening to music and playing sportts</p>

            <div className='itemInfo'>
                <PhoneOutlined style={{ fontSize: "30px", borderRadius: "50%", color:"rgb(35 56 77"}} rotate={90} /> <p>0964969163</p>
            </div>
            <div className='itemInfo'>
                <MailOutlined style={{ fontSize: "30px", borderRadius: "50%", color:"rgb(35 56 77)"}} /> <p>trandien99it@gmail.com</p>
            </div>
            <div className='itemInfo'>
                <HomeOutlined style={{ fontSize: "30px", borderRadius: "50%", color:"rgb(35 56 77)" }} /> <p>Tam Binh, Thu Duc, HCM</p>
            </div>
            <div className='itemInfo'>
                <GithubFilled style={{ fontSize: "30px", borderRadius: "50%", color:"rgb(35 56 77)" }} /> <a href="https://github.com/dientrann" target='_blank'>https://github.com/dientrann</a>
            </div>

        </div>

    )
}