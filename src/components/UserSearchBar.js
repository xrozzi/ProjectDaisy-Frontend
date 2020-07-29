// import React, { useState, Component } from "react";

// import TextField from "@material-ui/core/TextField";

// import Autocomplete from "@material-ui/lab/Autocomplete";

// import AppBar from "@material-ui/core/AppBar";
// import Button from "@material-ui/core/Button";

// import Toolbar from "@material-ui/core/Toolbar";

// import localApi from "../apis/localapi.js";

// import axios from "axios";

// export class UserSearchBar extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       UserData: [],
//       UserIdd: "",
//     };
//   }

//   componentDidMount() {
//     localApi.get(`/users`).then((response) => {
//       console.log(response.data);
//       this.setState({
//         UserData: response.data,
//       });
//     });
//   }

//   render() {
//     return (
//       <div style={{ padding: "20px" }}>
//         <Autocomplete
//           className="pding"
//           onChange={this.state.UserIdd.id}
//           id="combo-box-demo"
//           options={this.state.UserData}
//           getOptionLabel={(option) => option.email}
//           style={{ width: 300 }}
//           renderInput={(params) => (
//             <TextField
//               {...params}
//               label="Auto Complete"
//               variant="outlined"
//               fullWidth
//             />
//           )}
//         />
//         <Button>Find User</Button>
//       </div>
//     );
//   }
// }

// export default UserSearchBar;

import React, { useState } from "react";
import { List as VirtualList, AutoSizer } from "react-virtualized";
import { makeStyles } from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles((theme) => ({
  list: {
    height: 300,
  },
  paper: {
    margin: theme.spacing(3),
  },
}));
function* genItems() {
  for (let i = 1; i <= 1000; i++) {
    yield `Item ${i}`;
  }
}
export default function ScrollingLists() {
  const classes = useStyles();
  const [items] = useState([...genItems()]);
  const rowRenderer = ({ index, isScrolling, key, style }) => {
    const item = items[index];
    return (
      <ListItem button key={key} style={style}>
        <ListItemText primary={isScrolling ? "..." : item} />
      </ListItem>
    );
  };
  return (
    <Paper className={classes.paper}>
      <List className={classes.list}>
        <AutoSizer disableHeight>
          {({ width }) => (
            <VirtualList
              width={width}
              height={300}
              rowHeight={50}
              rowCount={items.length}
              rowRenderer={rowRenderer}
            />
          )}
        </AutoSizer>
      </List>
    </Paper>
  );
}
