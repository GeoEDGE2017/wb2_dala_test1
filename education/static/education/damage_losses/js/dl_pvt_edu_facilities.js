//Table 4
var bsHealthStatusApp = angular.module('dlPvtEduFacilitiesApp', ['ui.bootstrap', 'popoverToggle']);
bsHealthStatusApp.controller('DlPvtEduFacilitiesController', function DlPvtEduFacilitiesController($scope, $http, $filter) {
	$scope.dlPvtEduFacilities;
	$scope.total;
	$scope.iter_tot;
	$scope.district;
	$scope.incident;
	$scope.bs_date;
	$scope.is_edit = false;
	$scope.submitted = false;
	$scope.schoolName = null;
	$scope.schoolType = null;
	$scope.schools = [];
	$scope.new_school = {
		id: null,
		name: null,
		district_id: null
	};
	$scope.schoolData = null;
	$scope.is_edit_model = false;
	$scope.user_id;
	$scope.is_edit_disable = false;
	$scope.preSchool = [];
	$scope.prmSchool = [];
	$scope.secSchool = [];
	$scope.unv = [];
	$scope.techInst = [];
	$scope.is_submit = false;
	$scope.check_search = false;

	$scope.new_school = {
		'PreSchools': {
			id: null,
			name: null,
			district_id: null
		},
		'PrimarySchools': {
			id: null,
			name: null,
			district_id: null
		},
		'SecondarySchools': {
			id: null,
			name: null,
			district_id: null
		},
		'Universities': {
			id: null,
			name: null,
			district_id: null
		},
		'TechInstitutes': {
			id: null,
			name: null,
			district_id: null
		}
	};

	var init_data = {
		'education': {
			'Table_4': {
				//Tab 1
				'DpefNaf': [{
					edu_facilities: 'Pre-school',
					num_edu_facilities: null,
					male: null,
					female: null
				}, {
					edu_facilities: 'Primary School',
					num_edu_facilities: null,
					male: null,
					female: null
				}, {
					edu_facilities: 'Secondary School',
					num_edu_facilities: null,
					male: null,
					female: null
				}, {
					edu_facilities: 'University',
					num_edu_facilities: null,
					male: null,
					female: null
				}, {
					edu_facilities: 'Technical Institutes',
					num_edu_facilities: null,
					male: null,
					female: null
				}, {
					edu_facilities: 'Other',
					num_edu_facilities: null,
					male: null,
					female: null
				}, {
					edu_facilities: 'TOTAL',
					num_edu_facilities: null,
					male: null,
					female: null
				}],
				//Tab 2
				'DpefBefPreSchool': [],
				'DpefBefPrmSchool': [],
				'DpefBefSecSchool': [],
				'DpefBefUnv': [],
				'DpefBefTechInst': [],
				'DpefBefOtherSchool': [{
					asset: 'Structure',
					other_school: null,
					est_rep_cost: null,
					est_repair_cost: null,
					tot_damages: null,
					est_los_year_1: null,
					est_los_year_2: null,
					tot_los: null
				}, {
					asset: 'Supplies and materials',
					pre_school: null,
					est_rep_cost: null,
					est_repair_cost: null,
					tot_damages: null,
					est_los_year_1: null,
					est_los_year_2: null,
					tot_los: null
				}, {
					asset: 'Equipment',
					pre_school: null,
					est_rep_cost: null,
					est_repair_cost: null,
					tot_damages: null,
					est_los_year_1: null,
					est_los_year_2: null,
					tot_los: null
				}, {
					asset: 'Total',
					pre_school: null,
					est_rep_cost: null,
					est_repair_cost: null,
					tot_damages: null,
					est_los_year_1: null,
					est_los_year_2: null,
					tot_los: null
				}]
			}
		}
	}

	$scope.dlPvtEduFacilities = angular.copy(init_data);

	$scope.totEstReplacementCost = function() {
		var tot = 0;
		if($scope.dlPvtEduFacilities.education.Table_4.DpefBefPreSchool.length > 0) {
			angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefPreSchool, function(value, index) {
				angular.forEach(value, function(value_in, index_in) {
					if(value_in.asset == 'Total') {
						tot = tot + value_in.est_rep_cost;
					}
				})
			})
		}
		if($scope.dlPvtEduFacilities.education.Table_4.DpefBefPrmSchool.length > 0) {
			angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefPrmSchool, function(value, index) {
				angular.forEach(value, function(value_in, index_in) {
					if(value_in.asset == 'Total') {
						tot = tot + value_in.est_rep_cost;
					}
				})
			})
		}
		if($scope.dlPvtEduFacilities.education.Table_4.DpefBefSecSchool.length > 0) {
			angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefSecSchool, function(value, index) {
				angular.forEach(value, function(value_in, index_in) {
					if(value_in.asset == 'Total') {
						tot = tot + value_in.est_rep_cost;
					}
				})
			})
		}
		if($scope.dlPvtEduFacilities.education.Table_4.DpefBefUnv.length > 0) {
			angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefUnv, function(value, index) {
				angular.forEach(value, function(value_in, index_in) {
					if(value_in.asset == 'Total') {
						tot = tot + value_in.est_rep_cost;
					}
				})
			})
		}
		if($scope.dlPvtEduFacilities.education.Table_4.DpefBefTechInst.length > 0) {
			angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefTechInst, function(value, index) {
				angular.forEach(value, function(value_in, index_in) {
					if(value_in.asset == 'Total') {
						tot = tot + value_in.est_rep_cost;
					}
				})
			})
		}
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefOtherSchool, function(value, index) {
			if(value.asset == 'Total') {
				tot = tot + value.est_rep_cost;
			}
		})
		return tot;
	}

	$scope.totEstRepairCost = function() {
		var tot = 0;
		if($scope.dlPvtEduFacilities.education.Table_4.DpefBefPreSchool.length > 0) {
			angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefPreSchool, function(value, index) {
				angular.forEach(value, function(value_in, index_in) {
					if(value_in.asset == 'Total') {
						tot = tot + value_in.est_repair_cost;
					}
				})
			})
		}
		if($scope.dlPvtEduFacilities.education.Table_4.DpefBefPrmSchool.length > 0) {
			angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefPrmSchool, function(value, index) {
				angular.forEach(value, function(value_in, index_in) {
					if(value_in.asset == 'Total') {
						tot = tot + value_in.est_repair_cost;
					}
				})
			})
		}
		if($scope.dlPvtEduFacilities.education.Table_4.DpefBefSecSchool.length > 0) {
			angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefSecSchool, function(value, index) {
				angular.forEach(value, function(value_in, index_in) {
					if(value_in.asset == 'Total') {
						tot = tot + value_in.est_repair_cost;
					}
				})
			})
		}
		if($scope.dlPvtEduFacilities.education.Table_4.DpefBefUnv.length > 0) {
			angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefUnv, function(value, index) {
				angular.forEach(value, function(value_in, index_in) {
					if(value_in.asset == 'Total') {
						tot = tot + value_in.est_repair_cost;
					}
				})
			})
		}
		if($scope.dlPvtEduFacilities.education.Table_4.DpefBefTechInst.length > 0) {
			angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefTechInst, function(value, index) {
				angular.forEach(value, function(value_in, index_in) {
					if(value_in.asset == 'Total') {
						tot = tot + value_in.est_repair_cost;
					}
				})
			})
		}
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefOtherSchool, function(value, index) {
			if(value.asset == 'Total') {
				tot = tot + value.est_repair_cost;
			}
		})
		return tot;
	}

	$scope.totDamages = function() {
		var tot = 0;
		if($scope.dlPvtEduFacilities.education.Table_4.DpefBefPreSchool.length > 0) {
			angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefPreSchool, function(value, index) {
				angular.forEach(value, function(value_in, index_in) {
					if(value_in.asset == 'Total') {
						tot = tot + value_in.tot_damages;
					}
				})
			})
		}
		if($scope.dlPvtEduFacilities.education.Table_4.DpefBefPrmSchool.length > 0) {
			angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefPrmSchool, function(value, index) {
				angular.forEach(value, function(value_in, index_in) {
					if(value_in.asset == 'Total') {
						tot = tot + value_in.tot_damages;
					}
				})
			})
		}
		if($scope.dlPvtEduFacilities.education.Table_4.DpefBefSecSchool.length > 0) {
			angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefSecSchool, function(value, index) {
				angular.forEach(value, function(value_in, index_in) {
					if(value_in.asset == 'Total') {
						tot = tot + value_in.tot_damages;
					}
				})
			})
		}
		if($scope.dlPvtEduFacilities.education.Table_4.DpefBefUnv.length > 0) {
			angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefUnv, function(value, index) {
				angular.forEach(value, function(value_in, index_in) {
					if(value_in.asset == 'Total') {
						tot = tot + value_in.tot_damages;
					}
				})
			})
		}
		if($scope.dlPvtEduFacilities.education.Table_4.DpefBefTechInst.length > 0) {
			angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefTechInst, function(value, index) {
				angular.forEach(value, function(value_in, index_in) {
					if(value_in.asset == 'Total') {
						tot = tot + value_in.tot_damages;
					}
				})
			})
		}
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefOtherSchool, function(value, index) {
			if(value.asset == 'Total') {
				tot = tot + value.tot_damages;
			}
		})
		return tot;
	}

	$scope.totEstLosYear1 = function() {
		var tot = 0;
		if($scope.dlPvtEduFacilities.education.Table_4.DpefBefPreSchool.length > 0) {
			angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefPreSchool, function(value, index) {
				angular.forEach(value, function(value_in, index_in) {
					if(value_in.asset == 'Total') {
						tot = tot + value_in.est_los_year_1;
					}
				})
			})
		}
		if($scope.dlPvtEduFacilities.education.Table_4.DpefBefPrmSchool.length > 0) {
			angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefPrmSchool, function(value, index) {
				angular.forEach(value, function(value_in, index_in) {
					if(value_in.asset == 'Total') {
						tot = tot + value_in.est_los_year_1;
					}
				})
			})
		}
		if($scope.dlPvtEduFacilities.education.Table_4.DpefBefSecSchool.length > 0) {
			angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefSecSchool, function(value, index) {
				angular.forEach(value, function(value_in, index_in) {
					if(value_in.asset == 'Total') {
						tot = tot + value_in.est_los_year_1;
					}
				})
			})
		}
		if($scope.dlPvtEduFacilities.education.Table_4.DpefBefUnv.length > 0) {
			angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefUnv, function(value, index) {
				angular.forEach(value, function(value_in, index_in) {
					if(value_in.asset == 'Total') {
						tot = tot + value_in.est_los_year_1;
					}
				})
			})
		}
		if($scope.dlPvtEduFacilities.education.Table_4.DpefBefTechInst.length > 0) {
			angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefTechInst, function(value, index) {
				angular.forEach(value, function(value_in, index_in) {
					if(value_in.asset == 'Total') {
						tot = tot + value_in.est_los_year_1;
					}
				})
			})
		}
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefOtherSchool, function(value, index) {
			if(value.asset == 'Total') {
				tot = tot + value.est_los_year_1;
			}
		})
		return tot;
	}

	$scope.totEstLosYear2 = function() {
		var tot = 0;
		if($scope.dlPvtEduFacilities.education.Table_4.DpefBefPreSchool.length > 0) {
			angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefPreSchool, function(value, index) {
				angular.forEach(value, function(value_in, index_in) {
					if(value_in.asset == 'Total') {
						tot = tot + value_in.est_los_year_2;
					}
				})
			})
		}
		if($scope.dlPvtEduFacilities.education.Table_4.DpefBefPrmSchool.length > 0) {
			angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefPrmSchool, function(value, index) {
				angular.forEach(value, function(value_in, index_in) {
					if(value_in.asset == 'Total') {
						tot = tot + value_in.est_los_year_2;
					}
				})
			})
		}
		if($scope.dlPvtEduFacilities.education.Table_4.DpefBefSecSchool.length > 0) {
			angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefSecSchool, function(value, index) {
				angular.forEach(value, function(value_in, index_in) {
					if(value_in.asset == 'Total') {
						tot = tot + value_in.est_los_year_2;
					}
				})
			})
		}
		if($scope.dlPvtEduFacilities.education.Table_4.DpefBefUnv.length > 0) {
			angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefUnv, function(value, index) {
				angular.forEach(value, function(value_in, index_in) {
					if(value_in.asset == 'Total') {
						tot = tot + value_in.est_los_year_2;
					}
				})
			})
		}
		if($scope.dlPvtEduFacilities.education.Table_4.DpefBefTechInst.length > 0) {
			angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefTechInst, function(value, index) {
				angular.forEach(value, function(value_in, index_in) {
					if(value_in.asset == 'Total') {
						tot = tot + value_in.est_los_year_2;
					}
				})
			})
		}
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefOtherSchool, function(value, index) {
			if(value.asset == 'Total') {
				tot = tot + value.est_los_year_2;
			}
		})
		return tot;
	}

	$scope.totLos = function() {
		var tot = 0;
		if($scope.dlPvtEduFacilities.education.Table_4.DpefBefPreSchool.length > 0) {
			angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefPreSchool, function(value, index) {
				angular.forEach(value, function(value_in, index_in) {
					if(value_in.asset == 'Total') {
						tot = tot + value_in.tot_los;
					}
				})
			})
		}
		if($scope.dlPvtEduFacilities.education.Table_4.DpefBefPrmSchool.length > 0) {
			angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefPrmSchool, function(value, index) {
				angular.forEach(value, function(value_in, index_in) {
					if(value_in.asset == 'Total') {
						tot = tot + value_in.tot_los;
					}
				})
			})
		}
		if($scope.dlPvtEduFacilities.education.Table_4.DpefBefSecSchool.length > 0) {
			angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefSecSchool, function(value, index) {
				angular.forEach(value, function(value_in, index_in) {
					if(value_in.asset == 'Total') {
						tot = tot + value_in.tot_los;
					}
				})
			})
		}
		if($scope.dlPvtEduFacilities.education.Table_4.DpefBefUnv.length > 0) {
			angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefUnv, function(value, index) {
				angular.forEach(value, function(value_in, index_in) {
					if(value_in.asset == 'Total') {
						tot = tot + value_in.tot_los;
					}
				})
			})
		}
		if($scope.dlPvtEduFacilities.education.Table_4.DpefBefTechInst.length > 0) {
			angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefTechInst, function(value, index) {
				angular.forEach(value, function(value_in, index_in) {
					if(value_in.asset == 'Total') {
						tot = tot + value_in.tot_los;
					}
				})
			})
		}
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefOtherSchool, function(value, index) {
			if(value.asset == 'Total') {
				tot = tot + value.tot_los;
			}
		})
		return tot;
	}

	$scope.setSchoolTypeIDs = function() {
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefPreSchool, function(value, index) {
			angular.forEach(value, function(value_in, index_in) {
				console.log(value_in);
				value_in.pre_school = $scope.preSchool[index].id;
			})
		})
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefPrmSchool, function(value, index) {
			angular.forEach(value, function(value_in, index_in) {
				console.log(value_in);
				value_in.primary_school = $scope.prmSchool[index].id;
			})
		})
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefSecSchool, function(value, index) {
			angular.forEach(value, function(value_in, index_in) {
				console.log(value_in);
				value_in.secondary_school = $scope.secSchool[index].id;
			})
		})
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefUnv, function(value, index) {
			angular.forEach(value, function(value_in, index_in) {
				console.log(value_in);
				value_in.university = $scope.unv[index].id;
			})
		})
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefTechInst, function(value, index) {
			angular.forEach(value, function(value_in, index_in) {
				console.log(value_in);
				value_in.tech_institute = $scope.techInst[index].id;
			})
		})
		console.log($scope.dlPvtEduFacilities.education.Table_4);
	}

	$scope.getPrivateClinicsIDs = function() {
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefPreSchool, function(value, index) {
			console.log(value);
			$scope.preSchool.push(null);
			angular.forEach(value, function(value_in, index_in) {
				angular.forEach($scope.schools.PreSchools, function(pre_school, pre_school_index) {
					if(value_in.pre_school == pre_school.id) {
						console.log(value_in);
						$scope.preSchool[index] = pre_school;
					}
				})
			})
		})
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefPrmSchool, function(value, index) {
			console.log(value);
			$scope.prmSchool.push(null);
			angular.forEach(value, function(value_in, index_in) {
				angular.forEach($scope.schools.PrimarySchools, function(prm_school, prm_school_index) {
					if(value_in.primary_school == prm_school.id) {
						console.log(value_in);
						$scope.prmSchool[index] = prm_school;
					}
				})
			})
		})
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefSecSchool, function(value, index) {
			console.log(value);
			$scope.secSchool.push(null);
			angular.forEach(value, function(value_in, index_in) {
				angular.forEach($scope.schools.SecondarySchools, function(secondary_school, prm_school_index) {
					if(value_in.secondary_school == secondary_school.id) {
						console.log(value_in);
						$scope.secSchool[index] = secondary_school;
					}
				})
			})
		})
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefUnv, function(value, index) {
			console.log(value);
			$scope.unv.push(null);
			angular.forEach(value, function(value_in, index_in) {
				angular.forEach($scope.schools.Universities, function(university, prm_school_index) {
					if(value_in.university == university.id) {
						console.log(value_in);
						$scope.unv[index] = university;
					}
				})
			})
		})
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefTechInst, function(value, index) {
			console.log(value);
			$scope.techInst.push(null);
			angular.forEach(value, function(value_in, index_in) {
				angular.forEach($scope.schools.TechInstitutes, function(tech_institute, prm_school_index) {
					if(value_in.tech_institute == tech_institute.id) {
						console.log(value_in);
						$scope.techInst[index] = tech_institute;
					}
				})
			})
		})
		console.log($scope.dlPvtEduFacilities.education.Table_4);
	}

	$scope.addPrmSchoolIndex = function(index) {
		console.log($scope.dlPvtEduFacilities);
	}

	$scope.testing = function() {
        console.log("test", $scope.prmSchool);
    }

    // adding schools
	$scope.addSchool = function() {
		$scope.new_school[$scope.schoolType].district_id = $scope.district.district__id;
		console.log($scope.new_school[$scope.schoolType]);
		$http({
			method: "POST",
			url: "/add_entity",
			data: angular.toJson({
				'model_fields': $scope.new_school[$scope.schoolType],
				'model': $scope.schoolType,
				'is_edit': $scope.is_edit_model,
				'sector': 'education'
			}),
		}).success(function(data) {
			$("#modal-container-218029").modal('hide');
			$scope.new_school[$scope.schoolType].id = data;
			if(!$scope.is_edit_model) {
				if(data) {
					$scope.schools[$scope.schoolType].push($scope.new_school[$scope.schoolType]);
					console.log($scope.schools[$scope.schoolType]);
				}
			} else {
				var school = $filter('filter')($scope.schools[$scope.schoolType], {
					id: data
				})[0];
				school.name = $scope.new_school[$scope.schoolType].name;
			}
			$scope.new_school[$scope.schoolType] = null;
			$scope.is_edit_model = false;
		})
	}

	$scope.fetchSchools = function() {
		angular.forEach($scope.new_school, function(value, key) {
			value.district_id = $scope.district;
		});
		$http({
			method: "POST",
			url: "/education/damage_losses/fetch_schools",
			data: angular.toJson({
				'district': $scope.district.district__id,
				'schools': ['PreSchools', 'PrimarySchools', 'SecondarySchools', 'TechInstitutes', 'Universities']
			}),
		}).success(function(data) {
			$scope.schools = data;
		})
	}

	$scope.fetchSchoolData = function() {
		$http({
			method: "POST",
			url: '/education/damage_losses/dl_fetch_school_disagtn',
			data: angular.toJson({
				'table_name': 'Table_4',
				'sector': 'education',
				'com_data': {
					'incident': $scope.incident,
					'district': $scope.district.district__id,
					'user_id': $scope.user_id,
				},
			}),
		}).success(function(data) {
			$scope.schoolData = data;
			console.log('load ', data);
		})
	}

	$scope.insertAsset = function(table) {
		console.log($scope.dlPvtEduFacilities.education.Table_4[table]);
		var new_row;
		if(table == 'DpefNaf') {
			new_row = {
				edu_facilities: '',
				num_edu_facilities: null,
				male: null,
				female: null
			}
		}
		$scope.dlPvtEduFacilities.education.Table_4[table].push(new_row);
	}

	$scope.removeItem = function removeItem(table, index) {
		console.log('removeItem', table, index);
		if(table == 'DpefBefPreSchool') {
			$scope.dlPvtEduFacilities.education.Table_4.DpefBefPreSchool.splice(index, 1);
			$scope.preSchool.splice(index, 1);
		} else if(table == 'DpefBefPrmSchool') {
			$scope.dlPvtEduFacilities.education.Table_4.DpefBefPrmSchool.splice(index, 1);
			$scope.prmSchool.splice(index, 1);
		} else if(table == 'DpefBefSecSchool') {
			$scope.dlPvtEduFacilities.education.Table_4.DpefBefSecSchool.splice(index, 1);
			$scope.secSchool.splice(index, 1);
		} else if(table == 'DpefBefUnv') {
			$scope.dlPvtEduFacilities.education.Table_4.DpefBefUnv.splice(index, 1);
			$scope.unv.splice(index, 1);
		} else if(table == 'DpefBefTechInst') {
			$scope.dlPvtEduFacilities.education.Table_4.DpefBefTechInst.splice(index, 1);
			$scope.techInst.splice(index, 1);
		}
	}

	$scope.changedValue = function getBsData(selectedValue) {
		if($scope.incident && selectedValue) {
			$http({
				method: "POST",
				url: "/fetch_incident_districts",
				data: angular.toJson({
					'incident': $scope.incident,
					'user': $scope.user_id
				}),
			}).success(function(data) {
				$scope.districts = data;
				$scope.selectedDistrict = "";
				console.log(data);
			})
		}
		if($scope.incident && $scope.district) {
			$scope.is_edit_disable = true;
			$scope.check_search = true;
			$scope.fetchDlData();

		}
		}

	$scope.fetchDlData = function() {
		$http({
			method: "POST",
			url: '/bs_get_data_mock',
			data: angular.toJson({
				'table_name': 'Table_2',
				'sector': 'education',
				'db_tables': ['BugArcStructures', 'BugArcSupplies', 'BugArcEquipment', 'BugArpcStructures', 'BugArpcSupplies', 'BugArpcEquipment', 'BugAfr', 'BugCrp'],
				'com_data': {
					'district': $scope.district.district__id,
					'incident': $scope.incident,
				},
			}),
		}).success(function(data) {
//			angular.forEach(data, function(value, key) {
//				$scope.bs_data[key] = JSON.parse(value);
//			});
			$http({
				//this table does not get any data from baseline tables,
				//but we pass baseline table 3, for get baseline data only
				method: 'POST',
				url: '/get_latest_bs_date',
				contentType: 'application/json; charset=utf-8',
				data: angular.toJson({
					'db_tables': ['BugArcStructures', 'BugArcSupplies', 'BugArcEquipment', 'BugArpcStructures', 'BugArpcSupplies', 'BugArpcEquipment', 'BugAfr', 'BugCrp'],
					'com_data': {
						'district': $scope.district.district__id,
						'incident': $scope.incident,
					},
					'table_name': 'Table_2',
					'sector': 'education'
				}),
				dataType: 'json',
			}).then(function successCallback(response) {

                console.log('response', response.data.bs_created_date);
                var result = response.data;
                if(result.bs_date == null) {
                    $("#modal-container-239458").modal('show');
                }
                else {
                    var bs_date = result.bs_date.replace(/^"(.*)"$/, '$1');
                    $scope.currentBaselineDate = "Latest baseline data as at " + bs_date;
                    $scope.bsCreatedeDate = result.bs_created_date;
                    console.log('bs_date', result.bs_date);
                    console.log('bsCreatedeDate', result.bs_created_date);

                 }
			});
		})
	}

	$scope.saveDlData = function(form) {
		$scope.submitted = true;
		$scope.is_submit = true;
		if(form.$valid) {
			$scope.setSchoolTypeIDs();
			console.log($scope.dlPvtEduFacilities);
			$http({
				method: 'POST',
				url: '/dl_save_data_with_array',
				contentType: 'application/json; charset=utf-8',
				data: angular.toJson({
					'table_data': $scope.dlPvtEduFacilities,
					'com_data': {
						'district_id': $scope.district.district__id,
						'incident_id': $scope.incident,
					},
					'bs_date': $scope.bsCreatedeDate,
					'is_edit': $scope.is_edit,
					'user_id': $scope.user_id,
				}),
				dataType: 'json',
			}).then(function mySucces(response) {
				 if(response.data == 'False') {
                        $scope.is_valid_data = false;
                        $("#modal-container-239454").modal('show');
                    }
                    else {
                        $("#modal-container-239453").modal('show');
                    }
			}, function myError(response) {
				console.log(response);
			});
		}
		$scope.is_submit = false;
	}

	$scope.editDlData = function(form) {
		$scope.is_edit = true;
		$scope.submitted = true;
		document.getElementById("clearbtn").disabled = true;
		if(form.$valid) {
			$http({
				method: "POST",
				url: '/dl_fetch_edit_data_with_array',
				data: angular.toJson({
					'table_name': 'Table_4',
					'sector': 'education',
					'keys': {
						'DpefBefPreSchool': 'pre_school',
						'DpefBefPrmSchool': 'primary_school',
						'DpefBefSecSchool': 'secondary_school',
						'DpefBefUnv': 'university',
						'DpefBefTechInst': 'tech_institute',
					},
					'com_data': {
						'district': $scope.district.district__id,
						'incident': $scope.incident
							//                        'user_id': $scope.user_id,
					},
					'is_edit': $scope.is_edit
				}),
			}).success(function(data) {
				console.log(data);
				//                $scope.dlPvtEduFacilities = data;
				//                $scope.getPrivateClinicsIDs();
				var edit_data_not_found = false;
				if(data != null) {
					angular.forEach(data.education.Table_4, function(value, key, index) {
						console.log('value ', value, 'key ', key);
						if((value.length == 0) && (key != 'DpefBefPreSchool') && (key != 'DpefBefPrmSchool') && (key != 'DpefBefSecSchool') && (key != 'DpefBefTechInst') && (key != 'DpefBefUnv')) {
							edit_data_not_found = true;
						}
					})
					if(edit_data_not_found != true) {
						$scope.dlPvtEduFacilities = data;
						$scope.getPrivateClinicsIDs();
					} else {
						$("#modal-container-239456").modal('show');
					}
				} else {
					$("#modal-container-239456").modal('show');
				}
			})
		}
	}

	$scope.searchDlData = function(form) {
		document.getElementById("clearbtn").disabled = true;
		document.getElementById("editbtn").disabled = true;
		document.getElementById("subbtn").disabled = true;
		$scope.is_search = true;
		if(form.$valid) {
			$http({
				method: "POST",
				url: '/dl_fetch_edit_data_with_array',
				data: angular.toJson({
					'table_name': 'Table_4',
					'sector': 'education',
					'keys': {
						'DpefBefPreSchool': 'pre_school',
						'DpefBefPrmSchool': 'primary_school',
						'DpefBefSecSchool': 'secondary_school',
						'DpefBefUnv': 'university',
						'DpefBefTechInst': 'tech_institute',
					},
					'com_data': {
						'district': $scope.district.district__id,
						'incident': $scope.incident
							//                        'user_id': $scope.user_id,
					},
					'is_edit': $scope.is_edit
				}),
			}).success(function(data) {
				console.log(data);
				//                $scope.dlPvtEduFacilities = data;
				//                $scope.getPrivateClinicsIDs();
				var edit_data_not_found = false;
				if(data != null) {
					angular.forEach(data.education.Table_4, function(value, key, index) {
						console.log('value ', value, 'key ', key);
						if((value.length == 0) && (key != 'DpefBefPreSchool') && (key != 'DpefBefPrmSchool') && (key != 'DpefBefSecSchool') && (key != 'DpefBefTechInst') && (key != 'DpefBefUnv')) {
							edit_data_not_found = true;
						}
					})
					if(edit_data_not_found != true) {
						$scope.dlPvtEduFacilities = data;
						$scope.getPrivateClinicsIDs();
					} else {
						$("#modal-container-239456").modal('show');
					}
				} else {
					$("#modal-container-239456").modal('show');
				}
			})
		}
	}

	$scope.cancelEdit = function() {
		$scope.is_edit = false;
		$scope.dlPvtEduFacilities = init_data;
		location.reload();
	}

	$scope.addPreSchoolObject = function() {
		var new_row_one = [{
			asset: 'Structure',
			pre_school: null,
			est_rep_cost: null,
			est_repair_cost: null,
			tot_damages: null,
			est_los_year_1: null,
			est_los_year_2: null,
			tot_los: null
		}, {
			asset: 'Supplies and materials',
			pre_school: null,
			est_rep_cost: null,
			est_repair_cost: null,
			tot_damages: null,
			est_los_year_1: null,
			est_los_year_2: null,
			tot_los: null
		}, {
			asset: 'Equipment',
			pre_school: null,
			est_rep_cost: null,
			est_repair_cost: null,
			tot_damages: null,
			est_los_year_1: null,
			est_los_year_2: null,
			tot_los: null
		}, {
			asset: 'Total',
			pre_school: null,
			est_rep_cost: null,
			est_repair_cost: null,
			tot_damages: null,
			est_los_year_1: null,
			est_los_year_2: null,
			tot_los: null
		}];
		$scope.dlPvtEduFacilities.education.Table_4.DpefBefPreSchool.unshift(new_row_one);
		console.log($scope.dlPvtEduFacilities.education.Table_4.DpefBefPreSchool);
		$scope.preSchool.unshift(null);
		console.log('preSchool push', $scope.preSchool);
	}

	$scope.addPrmSchoolObject = function() {
		var new_row_one = [{
			asset: 'Structure',
			primary_school: null,
			est_rep_cost: null,
			est_repair_cost: null,
			tot_damages: null,
			est_los_year_1: null,
			est_los_year_2: null,
			tot_los: null
		}, {
			asset: 'Supplies and materials',
			primary_school: null,
			est_rep_cost: null,
			est_repair_cost: null,
			tot_damages: null,
			est_los_year_1: null,
			est_los_year_2: null,
			tot_los: null
		}, {
			asset: 'Equipment',
			primary_school: null,
			est_rep_cost: null,
			est_repair_cost: null,
			tot_damages: null,
			est_los_year_1: null,
			est_los_year_2: null,
			tot_los: null
		}, {
			asset: 'Total',
			primary_school: null,
			est_rep_cost: null,
			est_repair_cost: null,
			tot_damages: null,
			est_los_year_1: null,
			est_los_year_2: null,
			tot_los: null
		}]
		$scope.dlPvtEduFacilities.education.Table_4.DpefBefPrmSchool.unshift(new_row_one);
		console.log($scope.dlPvtEduFacilities.education.Table_4.DpefBefPrmSchool);
		$scope.prmSchool.unshift(null);
		console.log('prmSchool push', $scope.prmSchool);
	}

	$scope.addSecSchoolObject = function() {
		var new_row_one = [{
			asset: 'Structure',
			secondary_school: null,
			est_rep_cost: null,
			est_repair_cost: null,
			tot_damages: null,
			est_los_year_1: null,
			est_los_year_2: null,
			tot_los: null
		}, {
			asset: 'Supplies and materials',
			secondary_school: null,
			est_rep_cost: null,
			est_repair_cost: null,
			tot_damages: null,
			est_los_year_1: null,
			est_los_year_2: null,
			tot_los: null
		}, {
			asset: 'Equipment',
			secondary_school: null,
			est_rep_cost: null,
			est_repair_cost: null,
			tot_damages: null,
			est_los_year_1: null,
			est_los_year_2: null,
			tot_los: null
		}, {
			asset: 'Total',
			secondary_school: null,
			est_rep_cost: null,
			est_repair_cost: null,
			tot_damages: null,
			est_los_year_1: null,
			est_los_year_2: null,
			tot_los: null
		}]
		$scope.dlPvtEduFacilities.education.Table_4.DpefBefSecSchool.unshift(new_row_one);
		console.log($scope.dlPvtEduFacilities.education.Table_4.DpefBefSecSchool);
		$scope.secSchool.unshift(null);
		console.log('prmSchool push', $scope.secSchool);
	}

	$scope.addUnvObject = function() {
		var new_row_one = [{
			asset: 'Structure',
			university: null,
			est_rep_cost: null,
			est_repair_cost: null,
			tot_damages: null,
			est_los_year_1: null,
			est_los_year_2: null,
			tot_los: null
		}, {
			asset: 'Supplies and materials',
			university: null,
			est_rep_cost: null,
			est_repair_cost: null,
			tot_damages: null,
			est_los_year_1: null,
			est_los_year_2: null,
			tot_los: null
		}, {
			asset: 'Equipment',
			university: null,
			est_rep_cost: null,
			est_repair_cost: null,
			tot_damages: null,
			est_los_year_1: null,
			est_los_year_2: null,
			tot_los: null
		}, {
			asset: 'Total',
			university: null,
			est_rep_cost: null,
			est_repair_cost: null,
			tot_damages: null,
			est_los_year_1: null,
			est_los_year_2: null,
			tot_los: null
		}]
		$scope.dlPvtEduFacilities.education.Table_4.DpefBefUnv.unshift(new_row_one);
		console.log($scope.dlPvtEduFacilities.education.Table_4.DpefBefUnv);
		$scope.unv.unshift(null);
		console.log('university push', $scope.unv);
	}

	$scope.addTechInstbject = function() {
		var new_row_one = [{
			asset: 'Structure',
			tech_institute: null,
			est_rep_cost: null,
			est_repair_cost: null,
			tot_damages: null,
			est_los_year_1: null,
			est_los_year_2: null,
			tot_los: null
		}, {
			asset: 'Supplies and materials',
			tech_institute: null,
			est_rep_cost: null,
			est_repair_cost: null,
			tot_damages: null,
			est_los_year_1: null,
			est_los_year_2: null,
			tot_los: null
		}, {
			asset: 'Equipment',
			tech_institute: null,
			est_rep_cost: null,
			est_repair_cost: null,
			tot_damages: null,
			est_los_year_1: null,
			est_los_year_2: null,
			tot_los: null
		}, {
			asset: 'Total',
			tech_institute: null,
			est_rep_cost: null,
			est_repair_cost: null,
			tot_damages: null,
			est_los_year_1: null,
			est_los_year_2: null,
			tot_los: null
		}]
		$scope.dlPvtEduFacilities.education.Table_4.DpefBefTechInst.unshift(new_row_one);
		console.log($scope.dlPvtEduFacilities.education.Table_4.DpefBefTechInst);
		$scope.techInst.unshift(null);
		console.log('prmSchool push', $scope.techInst);
	}

	$scope.test = function() {
			console.log('preSchool', $scope.preSchool);
			console.log('prmSchool', $scope.prmSchool);
		}

    //Clear Function
	$scope.clear = function() {
		console.log("clear")
		$scope.is_edit = false;
		$scope.dlPvtEduFacilities = angular.copy(init_data);
		location.reload();
	}

	$scope.totDpefNaf_NumEduFacilities = function() {
		var tot = 0;
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefNaf, function(value, index) {
			if(value.edu_facilities != 'TOTAL') {
				tot = tot + value.num_edu_facilities;
			}
		})
		return tot;
	}

	$scope.totDpefNaf_Male = function() {
		var tot = 0;
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefNaf, function(value, index) {
			if(value.edu_facilities != 'TOTAL') {
				tot = tot + value.male;
			}
		})
		return tot;
	}

	$scope.totDpefNaf_Female = function() {
			var tot = 0;
			angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefNaf, function(value, index) {
				if(value.edu_facilities != 'TOTAL') {
					tot = tot + value.female;
				}
			})
			return tot;
		}

    //DpefBefPreSchool Totals
	$scope.totDpefBefPreSchool_EstRepCost = function() {
		var tot = 0;
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefPreSchool, function(value, index) {
			angular.forEach(value, function(value_in, index_in) {
				if(value_in.asset == 'Total') {
					tot = tot + value_in.est_rep_cost;
				}
			})
		})
		return tot;
	}

	$scope.totDpefBefPreSchool_EstRepairCost = function() {
		var tot = 0;
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefPreSchool, function(value, index) {
			angular.forEach(value, function(value_in, index_in) {
				if(value_in.asset == 'Total') {
					tot = tot + value_in.est_repair_cost;
				}
			})
		})
		return tot;
	}

	$scope.totDpefBefPreSchool_TotDamages = function() {
		var tot = 0;
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefPreSchool, function(value, index) {
			angular.forEach(value, function(value_in, index_in) {
				if(value_in.asset == 'Total') {
					tot = tot + value_in.tot_damages;
				}
			})
		})
		return tot;
	}

	$scope.totDpefBefPreSchool_EstLosYear1 = function() {
		var tot = 0;
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefPreSchool, function(value, index) {
			angular.forEach(value, function(value_in, index_in) {
				if(value_in.asset == 'Total') {
					tot = tot + value_in.est_los_year_1;
				}
			})
		})
		return tot;
	}

	$scope.totDpefBefPreSchool_EstLosYear2 = function() {
		var tot = 0;
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefPreSchool, function(value, index) {
			angular.forEach(value, function(value_in, index_in) {
				if(value_in.asset == 'Total') {
					tot = tot + value_in.est_los_year_2;
				}
			})
		})
		return tot;
	}

	$scope.totDpefBefPreSchool_TotLos = function() {
			var tot = 0;
			angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefPreSchool, function(value, index) {
				angular.forEach(value, function(value_in, index_in) {
					if(value_in.asset == 'Total') {
						tot = tot + value_in.tot_los;
					}
				})
			})
			return tot;
		}

    //DpefBefPrmSchool
	$scope.totDpefBefPrmSchool_EstRepCost = function() {
		var tot = 0;
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefPrmSchool, function(value, index) {
			angular.forEach(value, function(value_in, index_in) {
				if(value_in.asset == 'Total') {
					tot = tot + value_in.est_rep_cost;
				}
			})
		})
		return tot;
	}

	$scope.totDpefBefPrmSchool_EstRepairCost = function() {
		var tot = 0;
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefPrmSchool, function(value, index) {
			angular.forEach(value, function(value_in, index_in) {
				if(value_in.asset == 'Total') {
					tot = tot + value_in.est_repair_cost;
				}
			})
		})
		return tot;
	}

	$scope.totDpefBefPrmSchool_TotDamages = function() {
		var tot = 0;
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefPrmSchool, function(value, index) {
			angular.forEach(value, function(value_in, index_in) {
				if(value_in.asset == 'Total') {
					tot = tot + value_in.tot_damages;
				}
			})
		})
		return tot;
	}

	$scope.totDpefBefPrmSchool_EstLosYear1 = function() {
		var tot = 0;
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefPrmSchool, function(value, index) {
			angular.forEach(value, function(value_in, index_in) {
				if(value_in.asset == 'Total') {
					tot = tot + value_in.est_los_year_1;
				}
			})
		})
		return tot;
	}

	$scope.totDpefBefPrmSchool_EstLosYear2 = function() {
		var tot = 0;
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefPrmSchool, function(value, index) {
			angular.forEach(value, function(value_in, index_in) {
				if(value_in.asset == 'Total') {
					tot = tot + value_in.est_los_year_2;
				}
			})
		})
		return tot;
	}

	$scope.totDpefBefPrmSchool_TotLos = function() {
			var tot = 0;
			angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefPrmSchool, function(value, index) {
				angular.forEach(value, function(value_in, index_in) {
					if(value_in.asset == 'Total') {
						tot = tot + value_in.tot_los;
					}
				})
			})
			return tot;
		}

    //DpefBefSecSchool
	$scope.totDpefBefSecSchool_EstRepCost = function() {
		var tot = 0;
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefSecSchool, function(value, index) {
			angular.forEach(value, function(value_in, index_in) {
				if(value_in.asset == 'Total') {
					tot = tot + value_in.est_rep_cost;
				}
			})
		})
		return tot;
	}

	$scope.totDpefBefSecSchool_EstRepairCost = function() {
		var tot = 0;
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefSecSchool, function(value, index) {
			angular.forEach(value, function(value_in, index_in) {
				if(value_in.asset == 'Total') {
					tot = tot + value_in.est_repair_cost;
				}
			})
		})
		return tot;
	}

	$scope.totDpefBefSecSchool_TotDamages = function() {
		var tot = 0;
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefSecSchool, function(value, index) {
			angular.forEach(value, function(value_in, index_in) {
				if(value_in.asset == 'Total') {
					tot = tot + value_in.tot_damages;
				}
			})
		})
		return tot;
	}

	$scope.totDpefBefSecSchool_EstLosYear1 = function() {
		var tot = 0;
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefSecSchool, function(value, index) {
			angular.forEach(value, function(value_in, index_in) {
				if(value_in.asset == 'Total') {
					tot = tot + value_in.est_los_year_1;
				}
			})
		})
		return tot;
	}

	$scope.totDpefBefSecSchool_EstLosYear2 = function() {
		var tot = 0;
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefSecSchool, function(value, index) {
			angular.forEach(value, function(value_in, index_in) {
				if(value_in.asset == 'Total') {
					tot = tot + value_in.est_los_year_2;
				}
			})
		})
		return tot;
	}

	$scope.totDpefBefSecSchool_TotLos = function() {
			var tot = 0;
			angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefSecSchool, function(value, index) {
				angular.forEach(value, function(value_in, index_in) {
					if(value_in.asset == 'Total') {
						tot = tot + value_in.tot_los;
					}
				})
			})
			return tot;
		}

    //DpefBefUnv
	$scope.totDpefBefUnv_EstRepCost = function() {
		var tot = 0;
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefUnv, function(value, index) {
			angular.forEach(value, function(value_in, index_in) {
				if(value_in.asset == 'Total') {
					tot = tot + value_in.est_rep_cost;
				}
			})
		})
		return tot;
	}

	$scope.totDpefBefUnv_EstRepairCost = function() {
		var tot = 0;
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefUnv, function(value, index) {
			angular.forEach(value, function(value_in, index_in) {
				if(value_in.asset == 'Total') {
					tot = tot + value_in.est_repair_cost;
				}
			})
		})
		return tot;
	}

	$scope.totDpefBefUnv_TotDamages = function() {
		var tot = 0;
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefUnv, function(value, index) {
			angular.forEach(value, function(value_in, index_in) {
				if(value_in.asset == 'Total') {
					tot = tot + value_in.tot_damages;
				}
			})
		})
		return tot;
	}

	$scope.totDpefBefUnv_EstLosYear1 = function() {
		var tot = 0;
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefUnv, function(value, index) {
			angular.forEach(value, function(value_in, index_in) {
				if(value_in.asset == 'Total') {
					tot = tot + value_in.est_los_year_1;
				}
			})
		})
		return tot;
	}

	$scope.totDpefBefUnv_EstLosYear2 = function() {
		var tot = 0;
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefUnv, function(value, index) {
			angular.forEach(value, function(value_in, index_in) {
				if(value_in.asset == 'Total') {
					tot = tot + value_in.est_los_year_2;
				}
			})
		})
		return tot;
	}

	$scope.totDpefBefUnv_TotLos = function() {
			var tot = 0;
			angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefUnv, function(value, index) {
				angular.forEach(value, function(value_in, index_in) {
					if(value_in.asset == 'Total') {
						tot = tot + value_in.tot_los;
					}
				})
			})
			return tot;
		}

    //DpefBefTechInst
	$scope.totDpefBefTechInst_EstRepCost = function() {
		var tot = 0;
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefTechInst, function(value, index) {
			angular.forEach(value, function(value_in, index_in) {
				if(value_in.asset == 'Total') {
					tot = tot + value_in.est_rep_cost;
				}
			})
		})
		return tot;
	}

	$scope.totDpefBefTechInst_EstRepairCost = function() {
		var tot = 0;
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefTechInst, function(value, index) {
			angular.forEach(value, function(value_in, index_in) {
				if(value_in.asset == 'Total') {
					tot = tot + value_in.est_repair_cost;
				}
			})
		})
		return tot;
	}

	$scope.totDpefBefTechInst_TotDamages = function() {
		var tot = 0;
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefTechInst, function(value, index) {
			angular.forEach(value, function(value_in, index_in) {
				if(value_in.asset == 'Total') {
					tot = tot + value_in.tot_damages;
				}
			})
		})
		return tot;
	}

	$scope.totDpefBefTechInst_EstLosYear1 = function() {
		var tot = 0;
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefTechInst, function(value, index) {
			angular.forEach(value, function(value_in, index_in) {
				if(value_in.asset == 'Total') {
					tot = tot + value_in.est_los_year_1;
				}
			})
		})
		return tot;
	}

	$scope.totDpefBefTechInst_EstLosYear2 = function() {
		var tot = 0;
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefTechInst, function(value, index) {
			angular.forEach(value, function(value_in, index_in) {
				if(value_in.asset == 'Total') {
					tot = tot + value_in.est_los_year_2;
				}
			})
		})
		return tot;
	}

	$scope.totDpefBefTechInst_TotLos = function() {
		var tot = 0;
		angular.forEach($scope.dlPvtEduFacilities.education.Table_4.DpefBefTechInst, function(value, index) {
			angular.forEach(value, function(value_in, index_in) {
				if(value_in.asset == 'Total') {
					tot = tot + value_in.tot_los;
				}
			})
		})
		return tot;
	}
})
