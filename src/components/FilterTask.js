import React, {Component} from 'react';
import ResponsiveDrawer from './ResponsiveDrawer';
import Button from '@material-ui/core/Button';
import Modal from 'react-awesome-modal';

export class FilterTask extends React.Component{
	constructor(props) {
		super(props);
		this.state={visible: true,name:"",estado:""};
		this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
	}
	openModal() {
			this.setState({
				visible : true
			});
		}

		closeModal() {
			this.setState({
				visible : false
			});
		} 
	handleSubmit(e){
		e.preventDefault();
		localStorage.setItem("filtroName", this.state.name);
		localStorage.setItem("filtroEstado", this.state.estado);
		
    }
	handleTextChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            estado: e.target.value
        });
    }	
	render(){
			
		
		return(

			  <Modal visible={this.state.visible} width="500" height="500" effect="fadeInUp" onClickAway={() => this.closeModal()}>
							<div>
								<center>
								<form  className="Filter Task" >
                    <h3>Filter Task</h3>
                    <label htmlFor="text" className="right-margin">
                        Nombre:
                    </label>

                    <input
                        id="text"
						onChange={this.handleTextChange}
                        value={this.state.name}>

                       
                    </input>

                    <br/>
                    <br/>
                    <label htmlFor="priority" className="right-margin">
                        Estado:
                    </label>

                    <input
                        id="priority"
                        onChange={this.handlePriorityChange}
                        value={this.state.estado}>
                        
                    </input>
					<br/>
					<br/>
					 <button>
                       Filter
                    </button>
					</form>	
                    <br/>
								<Button onClick={() => this.closeModal()} color="primary">
									Close
								</Button>
								</center>		
							</div>
			   </Modal>
		);
	}
}