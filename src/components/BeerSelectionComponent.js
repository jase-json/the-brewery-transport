import * as React from 'react';
import { createUseStyles } from "react-jss";
import BeerWidget from './BeerWidget';

const BeerSelectionComponent = (props) => {

    const useStyles = createUseStyles({
        overlay: {
            'position': 'fixed',
            'inset': '0px',
            'background-color': 'rgba(0, 0, 0, 0.4)',
          },
    });
    
    const classes = useStyles();

    const onBeerSelected = (beer) => {
        props.fridgePropsState.onBeerSelected(beer);
        console.log(`${beer} was selected`);
      };

      const getProps = (title, color) => {
        return { title, color, onBeerSelected };
      };

    return (
        <>
        <div className={classes.overlay} onClick={() => props.closeModal()} />
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
            <h1 style={{ marginTop: "0px" }}>Select Beer</h1>
            <div
              style={{
                overflow: "auto",
                display: "flex",
                flexDdirection: "column"
              }}
            >
              <div style={{ display: "flex" }}>
                <BeerWidget {...getProps("Beer 1", "rgb(255, 167, 26)")} />
                <BeerWidget {...getProps("Beer 2", "rgb(95, 166, 216)")} />
                <BeerWidget {...getProps("Beer 3", "rgb(120, 219, 166)")} />
                <BeerWidget {...getProps("Beer 4", "rgb(219, 190, 120)")} />
                <BeerWidget {...getProps("Beer 5", "rgb(219, 120, 199)")} />
              </div>
              <div
                className="fade-opacity-hover"
                style={{
                  margin: "24px auto",
                  padding: "12px",
                  backgroundColor: "rgb(164, 216, 231)",
                  color: "rgb(0, 0, 0)",
                  borderRradius: "99px",
                  cursor: "pointer"
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
