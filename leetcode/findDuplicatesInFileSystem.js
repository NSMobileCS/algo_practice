/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    let locations = {};
    for (let path of paths) {
        let pArr = path.split(' ');
        let basePath = pArr.shift();
        for (let file of pArr) {
            let fArr = file.split('(');
            let fileName = fArr[0];
            let fileContent = fArr[1].replace(')', '');
            if (locations[fileContent]) {
                locations[fileContent].push(basePath + '/' + fileName);
            } else {
                locations[fileContent] = [basePath + '/' + fileName];
            }
        }
    }
    return Object.values(locations).filter(arr => (arr.length > 1));
};



// input ["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"]
// output [["root/a/2.txt","root/c/d/4.txt","root/4.txt"],["root/a/1.txt","root/c/3.txt"]]

// ["root/a 1.txt(abcd) 2.txt(efsfgh)","root/c 3.txt(abdfcd)","root/c/d 4.txt(efggdfh)"]
// []
console.log(
    findDuplicate(
        ["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"]
    )
);

console.log(
    findDuplicate(
        ["root/a 1.txt(abcd) 2.txt(efsfgh)","root/c 3.txt(abdfcd)","root/c/d 4.txt(efggdfh)"]
    )
);
