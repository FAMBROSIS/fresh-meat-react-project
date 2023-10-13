import { useState, createContext, useContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage";
import TheNavbar from "./components/TheNavbar";
import Content from "./components/Content";
import Tools from "./components/Tools";
import { Routes, Route, Link } from "react-router-dom";
import RecipesPage from "./components/RecipesPage";

// const TimerContext = createContext();
// export const useTimerContext = () => {
//   return useContext(TimerContext);
// };
export const TimerContext = createContext();

function App({ children }) {
  const [fact, setFact] = useState("");


  const getRandomFact = (arr) => {

    const shuffledArray = [...arr];

    

      for (let i = shuffledArray.length-1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], 
        shuffledArray[j]] = [
          shuffledArray[j],
          shuffledArray[i],
        ];
      }    
      const randomIndex = arr.indexOf(shuffledArray[0]);
    return randomIndex;
    };
    const safteyFacts = [
      `Always wear shoes`,

      `Have you ever dropped a knife, or something sharp or hot? You don’t want to have your feet exposed when this happens,It is always recommended to wear shoes whenever you are cooking. Keeping them enclosed will give you that extra protection, whether it is from a falling object, broken glass, hot water or oil spills`,

      `Wear safe clothing`,

      `Avoid any long and baggy clothes when working in the kitchen, or dangling jewelry. Having anything hanging out may catch on to anything, from a pot with boiling water, to an open flame over the stove.`,

      `Tops with fitted sleeves or no sleeves work best. And keep any flammable or synthetic clothes out of the kitchen as a safety precaution.`,

      `Avoid burns.`,

      `Keep pot handles turned away from the front to avoid accidentally knocking the pot off the stove, or from kids grabbing the handles.`,

      `This is much safer than having someone knocking it off the kitchen bench or stove and having the food come flying and burning someone.`,

      `Always have potholders or oven mitts handy and close by when handling anything on the stovetop or oven. `,

      `Don’t forget to wash your hands.`,

      `You would think this is common sense, but a lot of people forget this step.`,

      `It’s important you wash your hands in warm soapy water before and after cooking. Try to use paper towels to dry your hands afterward. Dish towels may have raw meat/juice residue from wiping the dishes, and drying your hands with this can lead to food poisoning.`,

      `Always wash your hands before you start handling food, and when handling raw meat or poultry, wash your hands again before handling other ingredients to avoid cross-contamination.`,

      `Also, remember to wipe or kitchen surfaces and sinks after cooking. `,

      `Use different chopping boards for raw meat, fruits, and vegetables. `,

      `It may sound tempting to use the one chopping board for everything to make cleaning duties easier later on, but this is a shortcut you don’t want to take. `,

      `Using the same chopping board for meats, vegetables and fruits is a guaranteed way to get the whole family sick with salmonella poisoning. `,

      `It is advised to use one chopping board for raw meat, poultry and seafood, and another for fresh fruits and vegetables. `,

      `If you must use the same board, its safest to prepare your fruits and vegetables first, wash your cutting board thoroughly with soap and hot water, and then prepare your meats.`,

      `Handle hot dishes with care `,

      `Having hot dishes not only poses a risk to yourself but to all those around you. `,

      `Never leave stovetop dishes unattended while the burner is on, and use oven mitts when removing a hot lid to avoid burning your hands. `,

      `When boiling water, don’t fill it all the way to the top as it will bubble and flow over when hot. And be mindful and ensure you have a clear pathway when moving a pot of boiling water over to the sink.`,

      `Any spills should be wiped immediately to prevent any accidents.`,

      `Have a fire extinguisher and know how to use it. `,

      `The leading cause of fires and injuries in the household occurs when cooking. `,

      `Knowing how to use your fire extinguisher in case of an emergency is paramount, as there won’t be time to start reading instructions when a fire has broken out. It takes only seconds for a fire to get uncontrollable. `,

      `Learn about different types of fires such as grease and electric fires. Never put them out with water. Instead, your best bet to extinguish them is to use baking soda or a pan cover. Suffocating the fire by removing air is the best way to put out most fires. A fire inside your oven is best put out with an extinguisher, and a microwave fire can be put out just by turning off the appliance and keeping the door closed.`,

      `Store Your Food Properly `,

      `How you store and manage your food ultimately determines how fresh and safe the food you end up eating is, and is an integral part of kitchen safety. `,

      `It is best to refrigerate food within one to two hours, depending on room temperature. `,

      `Wrap meat or contain it securely so that it is completely isolated from other food. `,

      `Keep ingredients stored separately, as some foods expire more quickly than others, and storing them together can speed up the oxidization process. `,

      `Temperature-sensitive foodlike raw meat, fish, and certain dairy products need to be quickly put away before they go off, or contaminate other ingredients`,

      `Keep kids and pets out the way `,

      `Some children enjoy helping parents out in the kitchen, but you must teach them to stay out of your way when necessary and to keep their distance from hot appliances that haven’t yet cooled down. Furthermore, pets around your feet or lounging on the floor are tripping hazards, so it’s important to make sure that they are also kept at bay.`,

      `Don’t rush`,

      `Rushing around the kitchen will almost guarantee accidents. A top kitchen safety tip is to be careful and take your time when cutting food and moving pots and pans.`,

      `Wipe up spills immediately `,

      `It’s easy to spill something in the kitchen when you’re multi-tasking and trying to tend to others. To improve safety in the kitchen it’s crucial that you clean up water, grease or oil immediately, before anyone trips and hurts themselves. Furthermore, food that is spilt in the oven and not cleaned up gives your food an unpleasant taste of smoke and charcoal, which is unhygienic and can cause illness.`,

      `Keep your oven clean`,

      `Keeping your oven clean is a great kitchen safety tip because if food is spilt on your oven and not cleaned up, it can burn and set fire. Furthermore, if your oven is dirty then it will often produce black smoke, which can be very hazardous for you and your family. If you need your oven cleaning and would like a free quote, call us on 0800 840 7127, or complete our online form.`,

      `Learn how to use knives`,

      `Make sure you educate yourself on how to slice and chop food properly with knives so that you don’t injure yourself.`,

      `Check that your oven and other kitchen appliances are turned off `,

      `Leaving your oven and other kitchen appliances turned on could be a fire hazard or injure any pets and children if they’re left hot, so check that these are all turned off once you have finished using them in order to improve safety in the kitchen.`,

      `Keep a first aid kit in the kitchen `,

      `A first aid kit is not only important for the bathroom, but you should also make sure you have one handy in the kitchen too. It should include gauze, burn salve, scissors, and the phone number for your doctors and nearby hospitals.`,

      `Wear safe clothing and footwear `,

      `Be careful of what you wear whilst cooking or baking. Long sleeves, hair, scarves and jewellery can catch fire or tug at pots and pans, causing them to fall off the top of the stove.`,

      `Sanitise your kitchen`,

      `A kitchen safety tip worth remembering is to clean your kitchen with cleaner as often as possible, in order to prevent bacteria and germs from spreading.`,

      `Ensure your fire alarm works `,

      `According to the fire service, you are twice as likely to have a fatal fire in your home if you don’t own a smoke alarm. The large majority of fires start in the kitchen, so don’t forget to check your smoke alarm battery regularly and replace your fire alarm once every 10 years. `,

      `We hope that our kitchen safety tips will help you be more vigilant, so you can improve the safety of both you and your family.`,

      `Don’t wear loose clothing. `,

      `Loose clothing can hang and make contact with grill grates or catch on oven doors. You don’t want this to cause a fire. Accessories like hats or scarves could fall onto the grill as well. Take them off before you start grilling or cooking indoors. `,

      `Keep flammable liquids and materials away from open flames. `,

      `Grills and gas ranges produce a lot of heat, so it’s possible for surrounding materials to catch fire if they’re too close to the heat source. Keep your cooking area clear of combustible materials and other items that may catch fire. `,

      `Don’t leave your food unsupervised while cooking. `,

      `One of the leading causes of cooking fires indoors and outdoors is an unattended cooking area. If you’re multitasking or distracted, it’s easy to forget about your food. Be extra cautious when cooking, especially outdoors. If you go inside to do something else, you may not walk past the grill and notice that it’s on. `,

      `Make sure pot handles do not extend past the stovetop. `,

      `You can easily knock pots and pans over by running into the handles. In some cases, they’ll fall off the stove entirely. This is incredibly dangerous as you can burn yourself and potentially cause a grease fire. `,

      `In the event of a grease fire, turn off the heat source and smother it with a lid. Douse the fire with baking soda if available. `,

      `The first thing to do if a grease fire occurs is turn off the heat source. Then find a lid and smother the fire to deprive it of oxygen. If you don’t have a lid, apply baking soda or salt to the fire to extinguish it. Don’t attempt to remove the pan from the stove as it will be dangerously hot. `,

      `If baking soda or salt is not enough, use a fire extinguisher to douse the fire. This can also lead to some splashing of oil so it is the last resort. Don’t get too close to the fire when using the fire extinguisher. `,

      `Do not use water to douse a grease fire. It may spread the fire and splash oil which is dangerous. `,

      `In the event of a microwave or oven fire, turn off the heat and unplug the appliance. Use a fire extinguisher to douse the fire. `,

      `Follow the same process with a microwave oven fire, but unplug the appliance as well. You can use a fire extinguisher, baking soda, or salt to extinguish the fire. `,

      `If you cannot contain a cooking fire, get out of the area and call 9-1-1. `,

      `Notify anyone in the household and get out as quickly as possible. `,

      `Use separate cookware to prepare raw meat and poultry. `,

      `Consuming raw meat or poultry can lead to food poisoning. So you don’t want to mix it with other ingredients. If you’re using one cutting board to slice raw chicken, don’t use the same one for vegetables or fruits. This goes for any appliances you use when prepping food: mixing bowls, baking sheets, blenders, and more. `,

      `Double check that your burners are turned off after every use. `,

      `Sometimes they can be left on if you are distracted while cooking. Occasionally you can bump into them and turn them on accidentally. `,

      `Don’t use extension cords to power outdoor appliances. `,

      `Extension cords are not nearly as reliable as connecting to a three-prong outlet. They can overheat, spark, and cause fires if the connected appliance is too powerful. You should only use extension cords temporarily until you get the proper electrical parts and wiring installed. `,

      `Keep your distance from wooden structures while grilling. `,

      `Grilling near wooden structures like a cover or deck can lead to cooking fires. Stray sparks can make contact with the wood and burn it. It’s important to take precautions and have a fire extinguisher close by when grilling on a wooden deck. Don’t leave the grill unattended! `,

      `Check the temperature of your meat with a meat thermometer before serving. `,

      `Undercooked meat can make you sick, so the eye test is not enough. Just poke the thermometer into the meat to check the temperature. `,

      `Cook on a flat stable surface to reduce the risk of injury or cooking fires. `,

      `Lock the wheels on a freestanding grill so you can cook comfortably. You don’t want your meats moving around while you cook. When installing a built-in grill, make sure the floor is level.`,

      `Keep those pot holders, dish towels, and oven mitts away from the stove. `,

      `Leaving your used pot holders and other cloth materials near the stove especially if it’s still burning is definitely a bad idea. Cloths can easily catch fire, so always remember to put them back on their designated storage spaces right after using them. `,

      `It is also advisable to get a fire extinguisher for your kitchen. `,

      `Store your knives and other cutting tools on a rack or a drawer. `,

      `The best way to store all of your knives is to pick the place that is not within reach of children, but it shall be somewhere that will be comfortable to you. If you choose to stack them inside a drawer, make sure that it’s NOT on an elevated location where you have to extend your arms just to reach them. But if you have a rack, better make use of it.`,

      `Clean every spill on the floor immediately.`,

      `To avoid any injury due to someone accidentally stepping on a wet and slippery floor, never let those spills dangling on your kitchen floor for too long. Slippery floors are especially dangerous for children, elderly, and pregnant women.`,

      `If your kids left any toys on the floor, take them out as well.`,

      `Never let temperature-sensitive foods linger in the kitchen table.`,

      `Foods such as meat, dairy products, and fish could spoil pretty fast due to certain changes in the temperature. Always put them back to the fridge if there’s any leftover around.`,

      `Have a list of emergency numbers at hand.`,

      `Collect all the contact numbers of your local fire station, hospital, and emergency hotline. You can have them posted on your fridge with a sticky note so that you can easily see them in case anything goes wrong.`,

      `Being vigilant at all times is a mark of a responsible house owner. Take heed of these five tips so you can move on with your kitchen tasks worry-free!`,

      `Stand by your pan.`,

      `If you leave your kitchen, turn the burner off.`,

      `Keep an eye on what you fry! Most cooking fires start when frying food.`,

      `Roll up your sleeves. This reduces the chance that they’ll catch fire.`,

      `Supervise children and pets. Make sure they stay away from the stove.`,

      `Watch what you’re cooking! If you see any smoke, or grease starts to boil, turn the burner off.`,

      `If there’s an oven fire, keep the door closed. Turn off the oven and keep the door closed until it’s cool`,

      `Move things that can burn away from the stove. This includes dishtowels, bags, boxes, paper and curtains`,

      `Turn pot handles toward the back of the stove. This is so no one can bump them or pull them over`,

      `Only use a turkey fryer outdoors. Make sure that it the fryer is on a sturdy surface, away from things that can burn`,

      `Check smoke alarms. Make sure to have working smoke alarms close to where anyone may be sleeping`,
    ];

    const handleClick = () => {
      const randomIndex = getRandomFact(safteyFacts);
      setFact(safteyFacts[randomIndex]);
      console.log(`Random index: ${randomIndex}`);
    };

    // const randomIndex = getRandomFact(safteyFacts);
    // setFact(safteyFacts[randomIndex])
    // console.log(`Random index: ${randomIndex}`);



  return (
    <>
      <div id="body">
        <TheNavbar />
        <TimerContext.Provider
          value={fact}
        >

          <div id="routes">
            {/* <APIContext.Provider value={{ vRecipeData, setVRecipeData }}> */}
            <Routes>
              <Route path="/homepage" element={<HomePage />} />
              <Route path="/content" element={<Content />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/recipesPage" element={<RecipesPage />} />
            </Routes>
            {/* </APIContext.Provider> */}
          </div>
        <button onClick={handleClick}>Get Saftey Fact</button>
        </TimerContext.Provider>
      </div>
    </>
  );
}

export default App;

