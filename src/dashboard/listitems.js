import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import AssignmentIcon from "@material-ui/icons/Assignment";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import SchoolIcon from "@material-ui/icons/School";
import Link from "next/link";

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <Link href="/eventpage">
      <ListItem button>
        <ListItemIcon>
          <EventAvailableIcon />
        </ListItemIcon>
        <ListItemText primary="Community Calender" />
      </ListItem>
    </Link>
    <Link href="/discussion">
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Discussion Board" />
      </ListItem>
    </Link>
    <ListItem button>
      <ListItemIcon>
        <BubbleChartIcon />
      </ListItemIcon>
      <ListItemText primary="Our Evangelists" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SchoolIcon />
      </ListItemIcon>
      <ListItemText primary="Knowledge Base" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
