import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../redux/actions.js";

class DisplayData extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { loading, data } = this.props;

    if (loading) return <h4>Loading...</h4>;

    return (
      <div>
        <h1>A short Naration of Lorem Ipsum</h1>
        {data && (
          <ul>
            <li>
              <p>
                <b>Title :</b>
                {data.title}
              </p>
              <p>
                <b>Body :</b>
                {data.body}
              </p>
            </li>
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  data: state.data,
});

export default connect(mapStateToProps, { fetchData })(DisplayData);
