import React, { Component } from "react";
import ReactDOM from "react-dom";
import ButtonSubscribe from "./ButtonSubscribe";
import NewsHandleChange from "./NewsHandleChange";

class NewslettersTable extends Component {
  constructor() {
    super();
    this.makeNewslettersTable = this.makeNewslettersTable.bind(this);
    this.manageCheckboxes = this.manageCheckboxes.bind(this);

    this.state = {
      checkedIds: [],
      subscribeButtonDisabled: true
    };
    this.selectedCheckboxes = new Set();
  }

  makeNewslettersTable() {
    const Newsletters = [
      {
        title: "Reverse the Online Gambling Ban",
        desc: "The MPA comes with three diferent sizes of foam and silicone tips and a carrying pouch."
      },
      {         
        title: "Successful MySpace Profile",
        desc: "All users on MySpace will know that there are millions of people out there."
      },
      {      
        title: "Home Audio Recording For Everyone",
        desc: "The number of friends and acquaintances will grow in a large number. This is what you should be looking for."
      },
      {      
        title: "Buying Used Electronic Test",
        desc: "People after all will make friends after reading about you. If you have an ugly profile, there is no way..."
      }
    ];
    const NewslettersRows = Newsletters.map((news, i) => {
      let key = `news-${Date.now()}-${i}`;
      let id = i;
      return (
        <NewsHandleChange
          manageCheckboxes={this.manageCheckboxes}
          key={key}
          id={id}
          checkedArray={this.state.checkedIds}
          title={news.title}
          desc={news.desc}                  
        />
      );
    });
    return NewslettersRows;
  }

  componentWillMount() {}

  manageCheckboxes(id, status) {
    const index = this.state.checkedIds.indexOf(id);
    let checkedIds = [];
    if (index === -1) {
      checkedIds = [...this.state.checkedIds, id];
      this.setState({ checkedIds: checkedIds });
    } else {
      checkedIds = this.state.checkedIds.filter(i => i !== id);
      this.setState({ checkedIds: checkedIds });
    }
    console.log("arr", checkedIds, "index", index, "id", id);

    //commenting out the code below
    // makes checkboxes responsive
    if (checkedIds.length === 0) {
      this.setState({ subscribeButtonDisabled: true });
    } else {
      this.setState({ subscribeButtonDisabled: false });
    }
  }

  handleSubscribe() {}

  render() {
    return (
      <div className="Newsletters-admin fadeInDown"> 
        <div className="centered">
          <h3>Newsletters</h3>  
          <h6>Select all the newsletters you'd like to receive</h6>
        </div>  
        <table className="table table-striped">       
          <tbody>{this.makeNewslettersTable()}</tbody>
        </table>
        <div className="card bg-light text-dark fadeInDown">                         
            <div className="">
              <input
                type="text"
                id="email"
                className="fadeIn third form-control"
                name="email"
                placeholder="Enter email"
                required
              />
            </div>
         
            <div className="form-group"> 
              <ButtonSubscribe
                isDisabled={this.state.subscribeButtonDisabled}
                handleSubscribe={this.handleSubscribe}
              />
            </div>
         
            <div className="">               
              <p className="label">
                <label htmlFor="checkid">                      
                  <input id="checkid"  type="checkbox" value="test" /> I do not want to receive information about future newsletters.
                </label>
              </p>
            </div>
         
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<NewslettersTable />, rootElement);

export default NewslettersTable;
