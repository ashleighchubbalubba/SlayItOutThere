import React from 'react';
import ItemTile from '../../GlobalComponents/ItemTile';
import ItemService from '../../../itemService';
import { Item as ItemType } from '../../../types';
import { sampleCupidBuild, itemGridTile } from '../../../constants/smiteData';
import './ItemsGrid.scss';

const ItemsGrid = ({ build }: any) => {
  const itemService = new ItemService();

  let item = undefined;

  return (
    <>
      <div className="listOfItemsGrids">
        <div className="itemsGrid">
          <div className="itemsGridLeft">
            <div className="buildName">SUPPORT BUILD</div>

            <div className="itemSection">
              <div className="itemSectionTitle">Starter</div>
              <div className="itemSectionFlex">
                {sampleCupidBuild.starter.map((itemID: number) => {
                  item = itemService.getItem(itemID);
                  return <ItemTile name={item.name} thumbnail={item.thumbnail} css={itemGridTile}/>;
                })}
              </div>
            </div>

            <div className="itemSection">
              <div className="itemSectionTitle">Core</div>
              <div className="itemSectionFlex">
                {sampleCupidBuild.core.map((itemID: number) => {
                  item = itemService.getItem(itemID);
                  return <ItemTile name={item.name} thumbnail={item.thumbnail} css={itemGridTile}/>;
                })}
              </div>
            </div>
            <div className="itemSection">
              <div className="situationalHeadingWrapper">
                <div className="itemSectionTitle">Situational</div>
              </div>
              <div className="itemSectionFlex">
                {sampleCupidBuild.situational.map((itemID: number) => {
                  item = itemService.getItem(itemID);
                  return <ItemTile name={item.name} thumbnail={item.thumbnail} css={itemGridTile}/>;
                })}
              </div>
            </div>
          </div>
          <div className="itemsGridRight">
            <div className="itemSectionTitle">Relics</div>
            <div className="relicSectionFlex">
              {sampleCupidBuild.relics.map((itemID: number) => {
                item = itemService.getItem(itemID);
                return <ItemTile id={item.id} name={item.name} thumbnail={item.thumbnail} css={itemGridTile}/>;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemsGrid;
