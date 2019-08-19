import React, { Component } from "react";
import { MDBDataTable } from 'mdbreact';


class DatatablePage extends Component {

  constructor(props){
    super(props);

    this.state = {
          error: null,
          isLoaded: false,
          data: []
        };
  }
  componentDidMount(){
    let rval = [];

    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then(res => res.json())
      .then(
        (result) => {

          result.forEach(function(element, key) {
            rval[ key ] = element;
            // console.log(  element  );
            // console.log(  key  );
          });

          console.log(rval);
          this.setState({
            isLoaded: false,
            data : {
              columns: [
                {
                  label: 'id',
                  field: 'id',
                  sort: 'asc',
                  width: 150
                },
                {
                  label: 'employee_age',
                  field: 'employee_age',
                  sort: 'asc',
                  width: 270
                },
                {
                  label: 'employee_name',
                  field: 'employee_name',
                  sort: 'asc',
                  width: 200
                },
                {
                  label: 'employee_salary',
                  field: 'employee_salary',
                  sort: 'asc',
                  width: 100
                }
              ],
              rows : rval

            }
          });


          // this.setState({
          //   isLoaded: true,
          //   items: result.items
          // });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )


  }


  state = {
    data : {
      rows: [
        {
          name: 'Tiger Nixon',
          position: 'System Architect',
          office: 'Edinburgh',
          age: '61',
          date: '2011/04/25',
          salary: '$320'
        },
        {
          name: 'Garrett Winters',
          position: 'Accountant',
          office: 'Tokyo',
          age: '63',
          date: '2011/07/25',
          salary: '$170'
        },
        {
          name: 'Michael Bruce',
          position: 'Javascript Developer',
          office: 'Singapore',
          age: '29',
          date: '2011/06/27',
          salary: '$183'
        },
        {
          name: 'Donna Snider',
          position: 'Customer Support',
          office: 'New York',
          age: '27',
          date: '2011/01/25',
          salary: '$112'
        }
      ]
    }
  }

  clickHandle = () =>{

    let rval = [];

    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then(res => res.json())
      .then(
        (result) => {

          result.forEach(function(element, key) {
            rval[ key ] = element;
            console.log(  element  );
            console.log(  key  );
          });

          console.log(rval);
          this.setState({
            isLoaded: false,
            data : {
              columns: [
                {
                  label: 'id',
                  field: 'id',
                  sort: 'asc',
                  width: 150
                },
                {
                  label: 'employee_age',
                  field: 'employee_age',
                  sort: 'asc',
                  width: 270
                },
                {
                  label: 'employee_name',
                  field: 'employee_name',
                  sort: 'asc',
                  width: 200
                },
                {
                  label: 'employee_salary',
                  field: 'employee_salary',
                  sort: 'asc',
                  width: 100
                }
              ],
              rows : rval

            }
          });


          // this.setState({
          //   isLoaded: true,
          //   items: result.items
          // });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.


        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {


    return (
    <div className="Test" onClick={this.clickHandle}>
        <button>REfresh</button>
        <MDBDataTable
          striped
          bordered
          small
          data={this.state.data}
        />
    </div>
  );
  }

}


export default DatatablePage;
