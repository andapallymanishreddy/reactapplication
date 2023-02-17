import { connect } from "react-redux";
function Countries(){
    return (
        <div>
            <h1>Countries</h1>
        </div>
    )
}
export default connect(function(store){return store})(Countries)