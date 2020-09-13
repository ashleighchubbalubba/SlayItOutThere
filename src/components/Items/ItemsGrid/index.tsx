import React from 'react';
import Item from '../../GlobalComponents/ItemTile';
import { Item as ItemType } from '../../../types';
import './ItemsGrid.scss';

const ItemsGrid = ({ build }: any) => {
  return (
    <>
      <div className="listOfItemsGrids">
        <div className="itemsGrid">
          {/* do it only if the selectedGod has a build */}
          {/* {build &&
            build.map((item: ItemType) => (
              <Item id={item.id} name={item.name} thumbnail={item.thumbnail} />
            ))} */}
          <div className="itemsGridLeft">
            <div className="buildName">SUPPORT BUILD</div>
            <div className="itemSection">
              <div className="itemSectionTitle">Starter</div>
              <div className="itemSectionFlex">
                {/* {build.starter.map(item => {
                    return (
                      <SmiteItem id={item.id} name={item.name} thumbnail={item.thumbnail}/>                           
                    )
                  })} */}
                <div className="itemEmptyBox"></div>
                <div className="itemEmptyBox"></div>
                <div className="itemEmptyBox"></div>
                <div className="itemEmptyBox"></div>
                <div className="itemEmptyBox"></div>
                <div className="itemEmptyBox"></div>
              </div>
            </div>
            <div className="itemSection">
              <div className="itemSectionTitle">Core</div>
              <div className="itemSectionFlex">
                <div className="itemEmptyBox"></div>
                <div className="itemEmptyBox"></div>
                <div className="itemEmptyBox"></div>
                <div className="itemEmptyBox"></div>
                <div className="itemEmptyBox"></div>
                <div className="itemEmptyBox"></div>
              </div>
            </div>
            <div className="itemSection">
              <div className="situationalHeadingWrapper">
                <div className="itemSectionTitle">Situational</div>
              </div>
              <div className="itemSectionFlex">
                <div className="itemEmptyBox"></div>
                <div className="itemEmptyBox"></div>
                <div className="itemEmptyBox"></div>
                <div className="itemEmptyBox"></div>
                <div className="itemEmptyBox"></div>
                <div className="itemEmptyBox"></div>
              </div>
            </div>
          </div>
          <div className="itemsGridRight">
            <div className="itemSectionTitle">Relics</div>
            <div className="relicSectionFlex">
              <div className="relicEmptyBox"></div>
              <div className="relicEmptyBox"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemsGrid;
