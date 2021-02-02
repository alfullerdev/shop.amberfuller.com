import '../css/art.css'
import '../css/footer.css'

export default function Footer(props) {
    
        return (
			<>
				<div className="footerBar" >
					Copyright &copy; 2020 <span>Amber Fuller Designer</span>. All rights reserved. | <button className="ui button noStyle" onClick={props.showFooterLink} >privacy policy</button> | <button className="ui button noStyle" onClick={props.showFooterReturn} >return policy</button>
				</div>
			</>
        )
     
}