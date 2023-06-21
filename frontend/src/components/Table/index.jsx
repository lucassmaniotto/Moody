import React from 'react';
import { formatDate } from '../../util/formatDate';

import { Button } from '../Button';

import { MdModeEditOutline } from 'react-icons/md';
import { RiDeleteBin2Fill } from 'react-icons/ri';

import {
  TableBody,
  TableDataCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  TableWrapper,
} from './style.js';

export const Table = ({ moods, setEmojiByHumorAcronym, handleEdit }) => {
  return (
    <TableWrapper>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Humor</TableHeaderCell>
          <TableHeaderCell>Descrição</TableHeaderCell>
          <TableHeaderCell>Criado em</TableHeaderCell>
          <TableHeaderCell>Ações</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {moods &&
          moods.length > 0 &&
          moods.map((mood) => (
            <TableRow key={mood.id}>
              <TableDataCell className="humor">
                {setEmojiByHumorAcronym(mood.acronym)}
              </TableDataCell>
              <TableDataCell className="description">
                {mood.description}
              </TableDataCell>
              <TableDataCell>{formatDate(mood.date)}</TableDataCell>
              <TableDataCell>
                <Button onClick={handleEdit}>
                  <MdModeEditOutline size={18} />
                </Button>
                <Button>
                  <RiDeleteBin2Fill size={18} />
                </Button>
              </TableDataCell>
            </TableRow>
          ))}
      </TableBody>
    </TableWrapper>
  );
};
