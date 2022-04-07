/*
Создайте функцию mock, которая принимает на вход аргумент number (количество миллисекунд) и возвращает Promise,
который завершится через заданное количество миллисекунд со значением, переданным в аргумент.
 */
export function mock(ms: number): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

/*
Перепишите функцию getData так, чтобы она выполнялась быстрее.
 */
export function getData(): Promise<number[]> {
    const result: number[] = [];

    const mock1 = mock(100).then((data1) => {
        result.push(data1);
    });
    const mock2 = mock(200).then((data1) => {
        result.push(data1);
    });
    const mock3 = mock(300).then((data1) => {
        result.push(data1);
        return result;
    });

    return Promise.all([mock1, mock2, mock3]).then(() => result);
}

/*
Исправьте функцию catchException так, чтобы блок try/catch обрабатывал
завершенный с ошибкой Promise и возвращал текст ошибки.
 */
export async function catchException(): Promise<string | undefined> {
    try {
        await Promise.reject(new Error('my error'));
    } catch (err: any) {
        return err.message;
    }
}
