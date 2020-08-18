import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

const data = [
  {
    id: 'root',
    name: 'Parent - 0',
    children: [
      {
        id: '1',
        name: 'Child - 1',
      },
      {
        id: '3',
        name: 'Child - 3',
        children: [
          {
            id: '4',
            name: 'Child - 4',
          },
        ],
      },
    ],
  },
  {
    id: '10',
    name: 'Parent - 10',
    children: [
      {
        id: '11',
        name: 'Child - 11',
      },
      {
        id: '13',
        name: 'Child - 13',
        children: [
          {
            id: '14',
            name: 'Child - 14',
          },
        ],
      },
    ],
  }
];

const useStyles = makeStyles({
  root: {
    height: 110,
    flexGrow: 1,
    maxWidth: 400,
  },
});

export default function RecursiveTreeView() {
  // const classes = useStyles();

  const renderItem = (nodes) => (
    nodes.map((node) => (
      <TreeItem key={node.id} nodeId={node.id} label={node.name}>
        {Array.isArray(node.children) ? renderItem(node.children) : null}
      </TreeItem>
    ))
  );

  const renderTree = (nodes) => (
    <TreeView
      // className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {renderItem(nodes)}
    </TreeView>
  )

  return renderTree(data);
}