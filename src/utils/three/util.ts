import * as THREE from 'three'
import Stats from 'stats.js'
import CameraControls from 'camera-controls'

function addHouseAndTree(scene) {
    createBoundingWall(scene)
    createGroundPlane(scene)
    createHouse(scene)
    createTree(scene)

    function createBoundingWall(scene) {
        const wallLeft = new THREE.BoxGeometry(70, 2, 2)
        const wallRight = new THREE.BoxGeometry(70, 2, 2)
        const wallTop = new THREE.BoxGeometry(2, 2, 50)
        const wallBottom = new THREE.BoxGeometry(2, 2, 50)

        const wallMaterial = new THREE.MeshPhongMaterial({
            color: 0xa0522d
        })

        const wallLeftMesh = new THREE.Mesh(wallLeft, wallMaterial)
        const wallRightMesh = new THREE.Mesh(wallRight, wallMaterial)
        const wallTopMesh = new THREE.Mesh(wallTop, wallMaterial)
        const wallBottomMesh = new THREE.Mesh(wallBottom, wallMaterial)

        wallLeftMesh.position.set(15, 1, -25)
        wallRightMesh.position.set(15, 1, 25)
        wallTopMesh.position.set(-19, 1, 0)
        wallBottomMesh.position.set(49, 1, 0)

        scene.add(wallLeftMesh)
        scene.add(wallRightMesh)
        scene.add(wallBottomMesh)
        scene.add(wallTopMesh)
    }

    function createGroundPlane(scene) {
        // create the ground plane
        const planeGeometry = new THREE.PlaneGeometry(70, 50)
        const planeMaterial = new THREE.MeshPhongMaterial({
            color: 0x9acd32
        })
        const plane = new THREE.Mesh(planeGeometry, planeMaterial)
        plane.receiveShadow = true

        // rotate and position the plane
        plane.rotation.x = -0.5 * Math.PI
        plane.position.x = 15
        plane.position.y = 0
        plane.position.z = 0

        scene.add(plane)
    }

    function createHouse(scene) {
        const roof = new THREE.ConeGeometry(5, 4)
        const base = new THREE.CylinderGeometry(5, 5, 6)

        // create the mesh
        const roofMesh = new THREE.Mesh(
            roof,
            new THREE.MeshPhongMaterial({
                color: 0x8b7213
            })
        )
        const baseMesh = new THREE.Mesh(
            base,
            new THREE.MeshPhongMaterial({
                color: 0xffe4c4
            })
        )

        roofMesh.position.set(25, 8, 0)
        baseMesh.position.set(25, 3, 0)

        roofMesh.receiveShadow = true
        baseMesh.receiveShadow = true
        roofMesh.castShadow = true
        baseMesh.castShadow = true

        scene.add(roofMesh)
        scene.add(baseMesh)
    }

    /**
     * Add the tree to the scene
     * @param scene The scene to add the tree to
     */
    function createTree(scene) {
        const trunk = new THREE.BoxGeometry(1, 8, 1)
        const leaves = new THREE.SphereGeometry(4)

        // create the mesh
        const trunkMesh = new THREE.Mesh(
            trunk,
            new THREE.MeshPhongMaterial({
                color: 0x8b4513
            })
        )
        const leavesMesh = new THREE.Mesh(
            leaves,
            new THREE.MeshPhongMaterial({
                color: 0x00ff00
            })
        )

        // position the trunk. Set y to half of height of trunk
        trunkMesh.position.set(-10, 4, 0)
        leavesMesh.position.set(-10, 12, 0)

        trunkMesh.castShadow = true
        trunkMesh.receiveShadow = true
        leavesMesh.castShadow = true
        leavesMesh.receiveShadow = true

        scene.add(trunkMesh)
        scene.add(leavesMesh)
    }
}

function addDefaultCubeAndSphere(scene) {
    // create a cube
    const cubeGeometry = new THREE.BoxGeometry(4, 4, 4)
    const cubeMaterial = new THREE.MeshLambertMaterial({
        color: 0xff0000
    })
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
    cube.castShadow = true

    // position the cube
    cube.position.x = -4
    cube.position.y = 3
    cube.position.z = 0

    // add the cube to the scene
    scene.add(cube)

    const sphereGeometry = new THREE.SphereGeometry(4, 20, 20)
    const sphereMaterial = new THREE.MeshLambertMaterial({
        color: 0x7777ff
    })
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)

    // position the sphere
    sphere.position.x = 20
    sphere.position.y = 0
    sphere.position.z = 2
    sphere.castShadow = true

    // add the sphere to the scene
    scene.add(sphere)

    return {
        cube: cube,
        sphere: sphere
    }
}

function addGroundPlane(scene) {
    // create the ground plane
    const planeGeometry = new THREE.PlaneGeometry(60, 20, 120, 120)
    const planeMaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff
    })
    const plane = new THREE.Mesh(planeGeometry, planeMaterial)
    plane.receiveShadow = true

    // rotate and position the plane
    plane.rotation.x = -0.5 * Math.PI
    plane.position.x = 15
    plane.position.y = 0
    plane.position.z = 0

    scene.add(plane)

    return plane
}

// 初始化相机
const initCamera = (initialPosition?) => {
    let position
    if (!initialPosition) {
        position = new THREE.Vector3(-30, 40, 30)
    } else {
        position = initialPosition
    }

    const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    )
    camera.position.copy(position)
    camera.lookAt(new THREE.Vector3(0, 0, 0))

    return camera
}

// 初始化坐标轴
const initAxes = (scene) => {
    const axes = new THREE.AxesHelper(20)
    scene.add(axes)
}

// 初始化帧率
const initStats = (el: HTMLElement) => {
    const stats = new Stats()
    stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
    stats.dom.style.position = 'absolute'
    stats.dom.style.left = '0px'
    stats.dom.style.top = '0px'
    el && el.appendChild(stats.dom)
    return stats
}

const initCameraControl = (camera, domElement) => {
    CameraControls.install({ THREE })
    const cameraControls = new CameraControls(camera, domElement)
    cameraControls.draggingDampingFactor = 5 // 拖动阻尼惯性
    return cameraControls
}

export {
    addHouseAndTree,
    addDefaultCubeAndSphere,
    addGroundPlane,
    initCamera,
    initAxes,
    initStats,
    initCameraControl
}
