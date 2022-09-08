from coffee_menu import MENU, resources
# dime - 10 cents, quarter - 25 cents, nickel - 5 cents, penny - 1 cent
def used_coins():
    """Asks for the money user is putting into coffee machine"""
    total_coins = []
    money = ["quarters", "dimes", "nickles", "pennies"]
    for coins in money:
        coins = int(input(f"How many {coins}?: "))
        total_coins.append(coins)
    return total_coins


def money_calc(coins_used):
    """Calculates the total amount of money that the user has put into the machine"""
    paid_coins = 0
    money_value = [0.25, 0.1, 0.05, 0.01]
    for i in range(len(coins_used)):
        for v in range(len(money_value)):
            if i == v:
                paid_coins += coins_used[i] * money_value[v]
    return paid_coins


#Work on calculating whether the ingredients are enough
def calc_ingredients(coffee_choice):
    """Checks if ingredients are enough to make the order"""
    water = resources['water']
    milk = resources['milk']
    coffee = resources['coffee']
    water_required = MENU[coffee_choice]['ingredients']['water']
    milk_required = MENU[coffee_choice]['ingredients']['milk']
    coffee_required = MENU[coffee_choice]['ingredients']['coffee']
    if water >= water_required and coffee >= coffee_required and milk >= milk_required:
        water -= water_required
        milk -= milk_required
        coffee -= coffee_required
        # remaining_ingredients = [water, coffee, milk]
        is_ingredients_enough = True
    else:
        is_ingredients_enough = False
    # for item in order_ingredients:
    #     if order_ingredients[item] > resources[item]:
    #         print(f"Sorry there is not enough {item}.")
    #         return False
    #     return True

    return is_ingredients_enough


def make_coffee(coffee_choice, if_enough, paid_amount, cost):
    if if_enough and paid_amount >= cost:
        print(f"Here is your {coffee_choice}")
    elif not if_enough:
        print(f"The ingredients are not enough to make your {coffee_choice}")
    elif paid_amount < cost:
        print("Sorry you dont have enough money to order")


def balance_calc(paid_amount, cost):
    if paid_amount > cost:
        print(f"Your balance is: ${paid_amount - cost:.2f}")


def get_coffee():
    """ Coffee machine: asks for what coffee you want and tells you whether you can get the coffee based on the amount
    of money you have"""
    coffee_choice = input("What would you like? (espresso/latte/cappuccino): ").lower()
    if coffee_choice == "off":
        return

    coins_used = used_coins()
    paid_amount = money_calc(coins_used)
    if_enough = calc_ingredients(coffee_choice)
    cost = MENU[coffee_choice]['cost']

    money_calc(coins_used)
    print(f"You have paid ${paid_amount:.2f}")
    balance_calc(paid_amount, cost)
    make_coffee(coffee_choice, if_enough, paid_amount, cost)
    get_coffee()


get_coffee()


# TODO: 1. Print report
# TODO: 2. Calculate ingredients

