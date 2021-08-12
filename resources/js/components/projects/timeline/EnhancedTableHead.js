import React, { useState, useEffect } from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function EnhancedTableHead({headCells,extraHeadCells,tablesubtasks}) {
    return (
        <TableHead style={{display:((tablesubtasks)?'none':'table-header-group')}}>
            <TableRow>
                {extraHeadCells?extraHeadCells:<></>}
                <TableCell  padding="checkbox"></TableCell>
                <TableCell  padding="checkbox"></TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.align}
                    >
                        {headCell.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

export default EnhancedTableHead;