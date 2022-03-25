import * as React from 'react';
import BeerWidget from './BeerWidget';
import ModalOverlay from './ModalOverlay';
import { createUseStyles } from "react-jss";

const BeerSelectionComponent = (props) => {

    const onBeerSelected = (beer) => {
        props.fridgePropsState.onBeerSelected(beer);
        console.log(`${beer} was selected`);
      };

      const getProps = (title, color) => {
        return { title, color, onBeerSelected };
      };

    return (
        <>
        <ModalOverlay {...props} />
        <div
          style={{
            position: "fixed",
            inset: "0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "48px 0px",
            boxSizing: "borderBox",
            pointerEvents: "none"
          }}
        >
          <div
            className="box-shadow"
            style={{
              display: "flex",
              flexDdirection: "column",
              padding: "24px",
              borderRradius: "4px",
              backgroundColor: "rgb(255, 255, 255)",
              width: "auto",
              maxHeight: "100%",
              boxSizing: "border-box",
              pointerEvents: "initial"
            }}
          >
            <h1 style={{ marginTop: "0px", fontFamily: "monospace" }}>Select Beer</h1>
            <div
              style={{
                overflow: "auto",
                display: "flex",
                flexDdirection: "column"
              }}
            >
              <div style={{ display: "flex" }}>
                <BeerWidget {...getProps("Beer 1", "lightGrey")} />
                <BeerWidget {...getProps("Beer 2", "lightGrey")} />
                <BeerWidget {...getProps("Beer 3", "lightGrey")} />
                <BeerWidget {...getProps("Beer 4", "lightGrey")} />
                <BeerWidget {...getProps("Beer 5", "lightGrey")} />
              </div>
              <div
                className="fade-opacity-hover"
                style={{
                  margin: "24px auto",
                  padding: "12px",
                  backgroundColor: "lightGrey",
                  color: "rgb(0, 0, 0)",
                  borderRradius: "99px",
                  cursor: "pointer",
                  fontFamily: "monospace"
                }}
                onClick={() => props.fridgePropsState.onBeerSelected("+")}
              >
                Clear Container
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default BeerSelectionComponent;
