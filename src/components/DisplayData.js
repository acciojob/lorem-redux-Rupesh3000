import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../redux/actions.js";

class DisplayData extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { loading, data } = this.props;

    if (loading) return <h4 className="title">Loading...</h4>;

    return (
      <div>
        <h1>A short Naration of Lorem Ipsum</h1>
        <h4>
          Below Contains A title and Body gotten froma random API, Please take
          your time to Review
        </h4>
        <ul>
          <li className="title">
            {data && (
              <>
                <p>
                  <b>Title:</b> {data.title}
                </p>
                <p>
                  <b>Body:</b> {data.body}
                </p>
              </>
            )}
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  data: state.data,
});

export default connect(mapStateToProps, { fetchData })(DisplayData);
