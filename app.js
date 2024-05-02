document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.buttons-container button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const plan = this.dataset.plan;
            displayPlan(plan);
        });
    });


    // Sample data for the caloric distribution chart
    const caloricData = [
        { label: 'Breakfast', calories: 300 },
        { label: 'Mid-Morning Snack', calories: 350 },
        { label: 'Lunch', calories: 400 },
        { label: 'Afternoon Snack', calories: 150 },
        { label: 'Dinner', calories: 450 },
        { label: 'Evening Snack', calories: 100 }
    ];

    // Calculate total calories
    const totalCalories = caloricData.reduce((sum, item) => sum + item.calories, 0);

    // Set up SVG container dimensions
    const width = 500;
    const height = 300;

    // Create SVG container
    const svg = d3.select('#caloricDistributionChart')
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    // Create a pie chart
    const pie = d3.pie().value(d => d.calories);
    const arc = d3.arc().innerRadius(0).outerRadius(Math.min(width, height) / 2);

    // Create groups for arcs
    const arcs = svg.selectAll('g.arc')
        .data(pie(caloricData))
        .enter()
        .append('g')
        .attr('class', 'arc')
        .attr('transform', `translate(${width / 2},${height / 2})`);

    // Create and colorize arcs
    arcs.append('path')
        .attr('fill', (d, i) => d3.schemeCategory10[i])
        .attr('d', arc);

    // Add labels
    arcs.append('text')
        .attr('transform', d => `translate(${arc.centroid(d)})`)
        .attr('text-anchor', 'middle')
        .text(d => `${((d.data.calories / totalCalories) * 100).toFixed(1)}%`);

    // Add legend
    const legend = svg.selectAll('.legend')
        .data(caloricData)
        .enter().append('g')
        .attr('class', 'legend')
        .attr('transform', (d, i) => `translate(0,${i * 20})`);

    legend.append('rect')
        .attr('width', 18)
        .attr('height', 18)
        .attr('fill', (d, i) => d3.schemeCategory10[i]);

    legend.append('text')
        .attr('x', 25)
        .attr('y', 9)
        .attr('dy', '0.35em')
        .text(d => d.label);
});

function displayPlan(plan) {
    const weightLossPlan = document.getElementById('weightLossPlan');
    const weightGainPlan = document.getElementById('weightGainPlan');
    const weightMaintenancePlan = document.getElementById('weightMaintenancePlan');
    // Clear existing content
    weightLossPlan.innerHTML = '';
    weightGainPlan.innerHTML = '';
    weightMaintenancePlan.innerHTML = '';
    

    // Add content for each plan
    if (plan === 'plan1') {
        weightLossPlan.innerHTML = `
            <h2>Weight Loss Plan for OverWeight (1600 Calories)</h2>
            <p><strong>Breakfast: Protein-Packed Smoothie</strong></p>
            <ul>
                <li>1 cup unsweetened almond milk</li>
                <li>1 scoop whey protein powder</li>
                <li>1/2 banana</li>
                <li>1/2 cup mixed berries</li>
                <li>1 tablespoon chia seeds</li>
            </ul>
            <p>Calories: 300 | Protein: 20 grams</p>
            <p><strong>Mid-Morning Snack: Greek Yogurt with Almonds</strong></p>
            <ul>
                <li>1 cup Greek yogurt</li>
                <li>1/4 cup almonds sliced</li>
            </ul>
            <p>Calories: 200 | Protein: 15 grams</p>
            <p><strong>Lunch: Grilled Chicken Salad</strong></p></strong>
            <ul>
                <li>4 ounces grilled chicken breast</li>
                <li>Mixed greens (lettuce, spinach)</li>
                <li>1 cup cherry tomatoes</li>
                <li>1/2 cucumber sliced</li>
                <li>1 tablespoon olive oil and balsamic vinegar dressing</li>
            </ul>
            <p>Calories: 400 | Protein: 30 grams</p>
            <p><strong>Afternoon Snack: Carrot and Hummus</strong></p>
            <ul>
                <li>1 cup baby carrots</li>
                <li>2 tablespoons hummus</li>
           </ul>
            <p>Calories: 150 | Protein: 5 grams</p>
            <p><strong>Dinner: Baked Fish with Quinoa and Steamed Vegetables</strong></p>
            <ul>
                <li>6 ounces baked white fish (like cod or tilapia)</li>
                <li>1 cup cooked quinoa</li>
                <li>Steamed broccoli, cauliflower, and carrots</li>
                <li>Lemon and herbs for seasoning</li>
            </ul>
            <p>Calories: 450 | Protein: 35 grams</p>
            <p><strong>Evening Snack: Green Tea and a Small Apple</strong></p>
            <ul>
                <li>1 cup green tea</li>
                <li>1 small apple</li>
            </ul>
            <p>Calories: 100</p>
            <br>
            <strong>Total Daily Calories: 1600</strong>
            <strong>|<strong>
            <strong>Total Daily Protein: 105 grams</strong>
        `;
    } else if (plan === 'plan2') {
        weightLossPlan.innerHTML = `
            <h2>Weight Loss Plan for Obese (1400 Calories)</h2>
            <p><strong>Breakfast: Veggie Omelette</strong></p>
            <ul>
                <li>2 eggs, scrambled with vegetables (spinach, bell peppers, tomatoes)</li>
                <li>1 slice whole-grain toast</li>
            </ul>
            <p>Calories: 250 | Protein: 14 grams</p>
            <br>
            <p><strong>Mid-Morning Snack: Cottage Cheese with Pineapple</strong></p>
            <ul>
                <li>3/4 cup low-fat cottage cheese</li>
                <li>1/2 cup pineapple chunks</li>
            </ul>
            <p>Calories: 150 | Protein: 15 grams</p>
            <br>
            <p><strong>Lunch: Turkey and Avocado Wrap</strong></p></strong>
            <ul>
                <li>3 ounces turkey breast slices</li>
                <li>1 whole-grain wrap</li>
                <li>1/4 avocado, sliced</li>
                <li>Lettuce, tomato, and mustard for flavor</li>
            </ul>
            <p>Calories: 350 | Protein: 20 grams</p>
            <br>
            <p><strong>Afternoon Snack: Celery Sticks with Peanut Butter</strong></p>
            <ul>
                <li>4 celery sticks</li>
                <li>1 tablespoons natural peanut butter</li>
           </ul>
            <p>Calories: 150 | Protein: 7 grams</p>
            <br>
            <p><strong>Dinner: Grilled Chicken and Vegetable Stir-Fry</strong></p>
            <ul>
                <li>5 ounces grilled chicken breast</li>
                <li>Mixed stir-fried vegetables (broccoli, snap peas, carrots)</li>
                <li>1/3 cup brown rice</li>
            </ul>
            <p>Calories: 350 | Protein: 25 grams</p>
            <br>
            <p><strong>Evening Snack: Greek Yogurt with Berries</strong></p>
            <ul>
                <li>3/4 cup plain Greek yogurt</li>
                <li>1/4 cup mixed berries (strawberries, blueberries)</li>
            </ul>
            <p>Calories: 150 | protein: 15 grams</p>
            <strong>Total Daily Calories: 1200</strong>
            <strong>|<strong>
            <strong>Total Daily Protein: 96 grams</strong>
            
        `;
    } else if(plan === 'plan3'){
        weightGainPlan.innerHTML = `
            <h2>Weight Gain Plan for UnderWeight (3000 Calories)</h2>
            <p><strong>Breakfast: High-Protein Shake</strong></p>
            <ul>
                <li>2 scoops Mass Gainer Protein Powder</li>
                <li>1 cup whole milk</li>
                <li>1 banana</li>
                <li>2 tablespoons peanut butter</li>
                <li>1 tablespoon honey</li>
                <li>1/2 cup rolled oats</li>
                <p>Combine the ingredients in a blender and blend until smooth.</p>
            </ul>
            <p>Calories: 800 | Protein: 40 grams</p>
            <br>
            <p><strong>Mid-Morning Snack: Greek Yogurt Parfait</strong></p>
            <ul>
                <li>1 cup Greek yogurt</li>
                <li>1/2 cup granola</li>
                <li>1/2 cup mixed berries (blueberries, strawberries)</li>
                <p>Layer the ingredients in a glass or bowl.</p>
            </ul>
            <p>Calories: 400 | Protein: 20 grams</p>
            <br>
            <p><strong>Lunch: Chicken and Quinoa Bowl</strong></p></strong>
            <ul>
                <li>6 ounces grilled chicken breast</li>
                <li>1 cup cooked quinoa</li>
                <li>1 cup mixed vegetables (broccoli, carrots, bell peppers)</li>
                <li>2 tablespoons olive oil</li>
                <p>Combine the ingredients in a bowl.</p>
            </ul>
            <p>Calories: 600 | Protein: 50 grams</p>
            <br>
            <p><strong>Nut and Dried Fruit Mix</strong></p>
            <ul>
                <li>1/2 cup mixed nuts (almonds, walnuts, cashews)</li>
                <li>1/2 cup dried fruits (raisins, apricots)</li>
                <p>Combine the nuts and dried fruits for a high-calorie snack.</p>
           </ul>
            <p>Calories: 500 | Protein: 15 grams</p>
            <br>
            <p><strong>Dinner: Beef and Sweet Potato Casserole</strong></p>
            <ul>
                <li>8 ounces lean ground beef</li>
                <li>1 large sweet potato, diced</li>
                <li>1 cup mixed vegetables (peas, corn, carrots)</li>
                <li>1/2 cup shredded cheese</li>
                <li>2 tablespoons olive oil</li>
                <p>Combine the ingredients in a casserole dish and bake until cooked.</p>
            </ul>
            <p>Calories: 600 | Protein: 45 grams</p>
            <br>
            <p><strong>Evening Snack: Peanut Butter Banana Sandwich</strong></p>
            <ul>
                <li>2 slices whole-grain bread</li>
                <li>2 tablespoons peanut butter</li>
                <li>1 banana, sliced</li>
                <p>Make a sandwich with peanut butter and banana slices.</p>
            </ul>
            <p>Calories: 100 | protein: 4 grams</p>
            <br>
            <strong>Total Daily Calories: 3000</strong>
            <strong>|<strong>
            <strong>Total Daily Protein: 174 grams</strong>
            
        `;
    } else if(plan === 'plan4'){
        weightMaintenancePlan.innerHTML = `
            <h2>Weight Maintenance Plan for IdealWeight (2200 Calories)</h2>
            <p><strong>Breakfast: Balanced Oatmeal Bowl</strong></p>
            <ul>
                <li>1 cup cooked oats</li>
                <li>1 medium-sized banana, sliced</li>
                <li>1 tablespoon chia seeds</li>
                <li>1 tablespoon almond butter</li>
                <li>1/4 cup Greek yogurt</li>
                <li>Sprinkle of cinnamon</li>
                <p>Mix all the ingredients in a bowl.</p>
            </ul>
            <p>Calories: 400 | Protein: 15 grams</p>
            <br>
            <p><strong>Mid-Morning Snack: Fruit and Nut Smoothie</strong></p>
            <ul>
                <li>1 cup mixed berries (strawberries, blueberries)</li>
                <li>1/2 cup low-fat yogurt</li>
                <li>1 tablespoon flaxseeds(blueberries, strawberries)</li>
                <li>1/4 cup mixed nuts (almonds, walnuts)</li>
                <p>Blend all the ingredients into a smoothie.</p>
            </ul>
            <p>Calories: 300 | Protein: 10 grams</p>
            <br>
            <p><strong>Lunch: Grilled Chicken Salad</strong></p></strong>
            <ul>
                <li>4 ounces grilled chicken breast, sliced</li>
                <li>Mixed greens (lettuce, spinach, arugula)</li>
                <li>1 cup cherry tomatoes, halved</li>
                <li>1/2 cucumber, sliced</li>
                <li>1/4 cup feta cheese</li>
                <li>Olive oil and balsamic vinaigrette dressing</li>
                <p>Toss all the ingredients in a salad bowl.</p>
            </ul>
            <p>Calories: 500 | Protein: 30 grams</p>
            <br>
            <p><strong>Afternoon Snack: Hummus and Vegetable Sticks</strong></p>
            <ul>
                <li>1/2 cup hummus</li>
                <li>Carrot and cucumber sticks for dipping</li>
           </ul>
            <p>Calories: 200 | Protein: 8 grams</p>
            <br>
            <p><strong>Dinner: Baked Salmon with Quinoa</strong></p>
            <ul>
                <li>6 ounces baked salmon</li>
                <li>1 cup cooked quinoa</li>
                <li>Steamed broccoli and asparagus</li>
                <li>Lemon and herb seasoning</li>
            </ul>
            <p>Calories: 600 | Protein: 40 grams</p>
            <br>
            <p><strong>Evening Snack:Greek Yogurt with Honey and Berries</strong></p>
            <ul>
                <li>1 cup Greek yogurt</li>
                <li>Mixed berries (raspberries, blackberries)</li>
                <li>Drizzle of honey</li>
            </ul>
            <p>Calories: 200 | protein: 15 grams</p>
            <br>
            <strong>Total Daily Calories: 2000</strong>
            <strong>|<strong>
            <strong>Total Daily Protein: 118 grams</strong>
            
        `;
    }

}

