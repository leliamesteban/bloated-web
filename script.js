function calculate1RM(weight, reps) {
    return Math.round((weight * reps * 0.033) + weight);
}

function calculateSetWeight(percentage1RM, weight, reps) {
    const setWeight = percentage1RM * calculate1RM(weight, reps);

    return Math.round(setWeight / 5) * 5;
}

function updateOverheadPress() {
    const overhead_press_1rm = document.querySelector("#overhead-press-1rm");
    const overhead_press_reps = document.querySelector("#overhead-press-reps").valueAsNumber;
    const overhead_press_weight = document.querySelector("#overhead-press-weight").valueAsNumber;
    const week1_set1_overhead_press = document.querySelector("#week1_set1_overhead_press");

    if (overhead_press_weight > 0 && overhead_press_reps > 0) {
        overhead_press_1rm.textContent = `${calculate1RM(overhead_press_weight, overhead_press_reps)} kgs`;
        console.log("Updated overhead press 1rm");

        week1_set1_overhead_press.textContent = calculateSetWeight(0.65, overhead_press_weight, overhead_press_reps);
        week1_set2_overhead_press.textContent = calculateSetWeight(0.75, overhead_press_weight, overhead_press_reps);
        week1_set3_overhead_press.textContent = calculateSetWeight(0.85, overhead_press_weight, overhead_press_reps);
        week2_set1_overhead_press.textContent = calculateSetWeight(0.70, overhead_press_weight, overhead_press_reps);
        week2_set2_overhead_press.textContent = calculateSetWeight(0.80, overhead_press_weight, overhead_press_reps);
        week2_set3_overhead_press.textContent = calculateSetWeight(0.90, overhead_press_weight, overhead_press_reps);
        week3_set1_overhead_press.textContent = calculateSetWeight(0.75, overhead_press_weight, overhead_press_reps);
        week3_set2_overhead_press.textContent = calculateSetWeight(0.85, overhead_press_weight, overhead_press_reps);
        week3_set3_overhead_press.textContent = calculateSetWeight(0.95, overhead_press_weight, overhead_press_reps);
        week4_set1_overhead_press.textContent = calculateSetWeight(0.40, overhead_press_weight, overhead_press_reps);
        week4_set2_overhead_press.textContent = calculateSetWeight(0.50, overhead_press_weight, overhead_press_reps);
        week4_set3_overhead_press.textContent = calculateSetWeight(0.60, overhead_press_weight, overhead_press_reps);

        console.log("Updated overhead press schedule");
    }

    else {
        console.log("Didn't update overhead press 1rm")
    }
}

function updateDeadlift() {
    const deadlift_1rm = document.querySelector("#deadlift-1rm");
    const deadlift_reps = document.querySelector("#deadlift-reps").valueAsNumber;
    const deadlift_weight = document.querySelector("#deadlift-weight").valueAsNumber;

    if (deadlift_weight > 0 && deadlift_reps > 0) {
        deadlift_1rm.textContent = `${calculate1RM(deadlift_weight, deadlift_reps)} kgs`;
        console.log("Updated deadlift 1rm");

        week1_set1_deadlift.textContent = calculateSetWeight(0.65, deadlift_weight, deadlift_reps);
        week1_set2_deadlift.textContent = calculateSetWeight(0.75, deadlift_weight, deadlift_reps);
        week1_set3_deadlift.textContent = calculateSetWeight(0.85, deadlift_weight, deadlift_reps);
        week2_set1_deadlift.textContent = calculateSetWeight(0.70, deadlift_weight, deadlift_reps);
        week2_set2_deadlift.textContent = calculateSetWeight(0.80, deadlift_weight, deadlift_reps);
        week2_set3_deadlift.textContent = calculateSetWeight(0.90, deadlift_weight, deadlift_reps);
        week3_set1_deadlift.textContent = calculateSetWeight(0.75, deadlift_weight, deadlift_reps);
        week3_set2_deadlift.textContent = calculateSetWeight(0.85, deadlift_weight, deadlift_reps);
        week3_set3_deadlift.textContent = calculateSetWeight(0.95, deadlift_weight, deadlift_reps);
        week4_set1_deadlift.textContent = calculateSetWeight(0.40, deadlift_weight, deadlift_reps);
        week4_set2_deadlift.textContent = calculateSetWeight(0.50, deadlift_weight, deadlift_reps);
        week4_set3_deadlift.textContent = calculateSetWeight(0.60, deadlift_weight, deadlift_reps);
    }

    else {
        console.log("Didn't update deadlift 1rm")
    }
}

function updateBenchPress() {
    const bench_press_1rm = document.querySelector("#bench-press-1rm");
    const bench_press_reps = document.querySelector("#bench-press-reps").valueAsNumber;
    const bench_press_weight = document.querySelector("#bench-press-weight").valueAsNumber;

    if (bench_press_weight > 0 && bench_press_reps > 0) {
        bench_press_1rm.textContent = `${calculate1RM(bench_press_weight, bench_press_reps)} kgs`;
        console.log("Updated bench press 1rm");

        week1_set1_bench_press.textContent = calculateSetWeight(0.65, bench_press_weight, bench_press_reps);
        week1_set2_bench_press.textContent = calculateSetWeight(0.75, bench_press_weight, bench_press_reps);
        week1_set3_bench_press.textContent = calculateSetWeight(0.85, bench_press_weight, bench_press_reps);
        week2_set1_bench_press.textContent = calculateSetWeight(0.70, bench_press_weight, bench_press_reps);
        week2_set2_bench_press.textContent = calculateSetWeight(0.80, bench_press_weight, bench_press_reps);
        week2_set3_bench_press.textContent = calculateSetWeight(0.90, bench_press_weight, bench_press_reps);
        week3_set1_bench_press.textContent = calculateSetWeight(0.75, bench_press_weight, bench_press_reps);
        week3_set2_bench_press.textContent = calculateSetWeight(0.85, bench_press_weight, bench_press_reps);
        week3_set3_bench_press.textContent = calculateSetWeight(0.95, bench_press_weight, bench_press_reps);
        week4_set1_bench_press.textContent = calculateSetWeight(0.40, bench_press_weight, bench_press_reps);
        week4_set2_bench_press.textContent = calculateSetWeight(0.50, bench_press_weight, bench_press_reps);
        week4_set3_bench_press.textContent = calculateSetWeight(0.60, bench_press_weight, bench_press_reps);
    }

    else {
        console.log("Didn't update bench press 1rm")
    }
}

function updateSquat() {
    const squat_1rm = document.querySelector("#squat-1rm");
    const squat_reps = document.querySelector("#squat-reps").valueAsNumber;
    const squat_weight = document.querySelector("#squat-weight").valueAsNumber;

    if (squat_weight > 0 && squat_reps > 0) {
        squat_1rm.textContent = `${calculate1RM(squat_weight, squat_reps)} kgs`;
        console.log("Updated squat 1rm");

        week1_set1_squat.textContent = calculateSetWeight(0.65, squat_weight, squat_reps);
        week1_set2_squat.textContent = calculateSetWeight(0.75, squat_weight, squat_reps);
        week1_set3_squat.textContent = calculateSetWeight(0.85, squat_weight, squat_reps);
        week2_set1_squat.textContent = calculateSetWeight(0.70, squat_weight, squat_reps);
        week2_set2_squat.textContent = calculateSetWeight(0.80, squat_weight, squat_reps);
        week2_set3_squat.textContent = calculateSetWeight(0.90, squat_weight, squat_reps);
        week3_set1_squat.textContent = calculateSetWeight(0.75, squat_weight, squat_reps);
        week3_set2_squat.textContent = calculateSetWeight(0.85, squat_weight, squat_reps);
        week3_set3_squat.textContent = calculateSetWeight(0.95, squat_weight, squat_reps);
        week4_set1_squat.textContent = calculateSetWeight(0.40, squat_weight, squat_reps);
        week4_set2_squat.textContent = calculateSetWeight(0.50, squat_weight, squat_reps);
        week4_set3_squat.textContent = calculateSetWeight(0.60, squat_weight, squat_reps);
    }

    else {
        console.log("Didn't update squat 1rm")
    }
}